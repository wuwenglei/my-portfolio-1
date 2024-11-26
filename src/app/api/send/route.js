import { NextResponse } from "next/server";

const messageApi = "https://api.wuwenglei.com/message/";
const messageApiHttpMethod = "POST";
const messageApiKeyHeader = "x-api-key";
const messageApiKeyValue = process.env.MessageAPIKey;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  const response = await fetch(messageApi, {
    method: messageApiHttpMethod,
    body: JSON.stringify({ email, subject, message }),
    headers: {
        "Content-type": "application/json",
        [messageApiKeyHeader]: messageApiKeyValue
    },
    cache: 'no-store'
  });
  let responseObj = await response.json();
  return NextResponse.json(responseObj["message"], { status: response.status });
}
