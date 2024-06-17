function cadastrar() {
                var nome = document.getElementById('nome').value;
                var email = document.getElementById('email').value;
                var cpf = document.getElementById('cpf').value;
                var username = document.getElementById('username').value;
                var senha = document.getElementById('senha').value;
                var datadenascimento = document.getElementById('nascimento').value;
                var sexo = document.getElementById('sexo').value;
                var recadastro = document.getElementById('recadastro');

                recadastro.innerHTML = `Ola ${nome}, esses saos seus dadaos: ${email} ${cpf} ${sexo}. Seu username é ${username} e sua senha é ${senha}, voce nasceu ${datadenascimento}.`
            }