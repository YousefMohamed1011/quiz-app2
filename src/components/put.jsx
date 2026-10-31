export const Put = () => {
    async function newUser() {
        try {
            const res = await fetch("https://api.escuelajs.co/api/v1/users", {
                method: "POST",
                headers: {
                    "content-type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    name: "John Doe",
                    email: `user_${Date.now()}@mail.com`,
                    password: "password123",
                    avatar: "https://picsum.photos/800"
                })
            });
            const data = await res.json();
            console.log(data);
            if (!res.ok) {
                console.error("فشل الطلب:", data);
            }
        } catch (error) {
            console.error(error);     
        }
    }

    return (
        <div>
            <button onClick={newUser}>ADD New user</button>
        </div>
    );
};
