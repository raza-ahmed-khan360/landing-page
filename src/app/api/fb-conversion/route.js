import { NextResponse } from 'next/server';
import crypto from 'crypto';

function sha256(str) {
  return crypto.createHash('sha256').update(str.trim().toLowerCase()).digest('hex');
}

export async function POST(request) {
  const { event_name, email, phone, custom_data } = await request.json();

  const pixelId    = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.FB_ACCESS_TOKEN;
  const now        = Math.floor(Date.now() / 1000);

  // Build user_data with hashed PII
  const user_data = {
    em: email ? sha256(email) : undefined,
    ph: phone ? sha256(phone) : undefined,
    client_ip_address: request.ip ?? undefined,
    client_user_agent: request.headers.get('user-agent') ?? undefined,
  };

  const payload = {
    data: [
      {
        event_name,
        event_time: now,
        action_source: 'website',
        user_data,
        custom_data,
      },
    ],
  };

  console.log('Sending payload to Facebook:', JSON.stringify(payload, null, 2));

  const fbRes = await fetch(
    `https://graph.facebook.com/v16.0/${pixelId}/events?access_token=${accessToken}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );
  const fbJson = await fbRes.json();

  if (!fbRes.ok) {
    return NextResponse.json({ success: false, error: fbJson }, { status: 500 });
  }

  return NextResponse.json({ success: true, response: fbJson });
}
