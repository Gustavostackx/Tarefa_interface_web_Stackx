async function buscarUsuario() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    const user = data.results[0]; // ✔ AGORA ESTÁ CORRETO

    const nome = `${user.name.first} ${user.name.last}`;
    const email = user.email;

    // ✔ birthDate precisa estar em formato ISO (YYYY-MM-DD)
    const dataNascimentoISO = user.dob.date.split("T")[0];

    const idade = user.dob.age;

    const usuarioTratado = {
      nome,
      email,
      dataNascimento: dataNascimentoISO, // ✔ Prisma aceita
      idade
    };

    document.getElementById("resultado").innerHTML = `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Nascimento:</strong> ${dataNascimentoISO}</p>
      <p><strong>Idade:</strong> ${idade}</p>
    `;

    const resp = await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuarioTratado)
    });

    const resultado = await resp.json();
    console.log(resultado);

  } catch (erro) {
    console.error("Erro no script:", erro);
  }
}
