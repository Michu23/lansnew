export async function POST(request) {
  const { name, number, state } = await request.json();

  const googleScriptUrl =
    "https://script.google.com/macros/s/AKfycbyh9YSRtG83_BDJaSGr6Ojn5fg2I9u7bTtKm0CXofxdUUGL81n8Tslw7G5sf0987jk9iA/exec";

  try {
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        number,
        state,
        timestamp: new Date().toISOString(),
      }),
    });

    const text = await response.text(); // Don't assume it's JSON yet

    if (!response.ok || text.includes("<!DOCTYPE")) {
      throw new Error("Invalid response from Google Sheets");
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("Response not in JSON format");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
