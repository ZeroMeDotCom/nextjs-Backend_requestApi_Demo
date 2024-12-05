export async function GET(request, { params }) {
    const { id } = params; // Destructure the 'id' from 'params'
  
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" }
    ];
  
    const user = users.find(user => user.id === parseInt(id));
  
    if (user) {
      return new Response(JSON.stringify(user), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }