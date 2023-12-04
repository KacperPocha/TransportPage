export async function fetchPost(){
    const respone = await fetch(`http://localhost:3000/orders/`)
    return respone.json()
}

export async function fetchPosts(id) {
    const response = await fetch(`http://localhost:3000/orders/${id}`);
    return response.json()
  }

export async function createPost(newPost){
    const respone = await fetch(`http://localhost:3000/orders/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })
    return respone.json()
}


export async function updatedOrder(updatedOrder) {
    const response = await fetch(`http://localhost:3000/orders/${updatedOrder.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedOrder)
    });
    return response.json()
  }

export async function deletePost(id){
    const respone = await fetch(`http://localhost:3000/orders/${id}`, {
        method: "DELETE"
    })
    return respone.json()
}