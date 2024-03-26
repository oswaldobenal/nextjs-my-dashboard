export async function GET(request: Request) {
  return Response.json({
    method: request.method,
    count: 100,
  });
}
