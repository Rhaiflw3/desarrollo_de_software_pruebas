document.addEventListener('DOMContentLoaded', () => {

    // Función genérica para procesar el envío de cualquier formulario
    const procesarFormulario = (e) => {
        e.preventDefault(); // Evita el envío estándar y la recarga de página

        const form = e.target;
        const formId = form.id;
        const formData = new FormData(form);

        // Recopilar todos los campos del formulario activo (inputs, selects, textareas)
        const inputs = form.querySelectorAll('input, select, textarea');
        let detallesHTML = '';

        inputs.forEach(input => {
            // Ignorar los botones de reset y submit
            if (input.type === 'submit' || input.type === 'reset' || input.tagName === 'BUTTON') {
                return;
            }

            // Manejo de casillas de verificación (checkboxes) y botones de opción (radio)
            if ((input.type === 'checkbox' || input.type === 'radio') && !input.checked) {
                return;
            }

            // Obtener el nombre del campo mediante label o id/name
            let labelText = '';
            const label = form.querySelector(`label[for="${input.id}"]`);
            if (label) {
                labelText = label.innerText.replace(':', '').trim();
            } else if (input.name) {
                labelText = input.name;
            } else {
                labelText = input.id;
            }

            // Agregar el dato extraído al reporte
            if (input.value) {
                detallesHTML += `
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: bold; background-color: #f9fafb;">${labelText}</td>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${input.value}</td>
                    </tr>
                `;
            }
        });

        // Generar una ventana/pestaña nueva con los resultados visuales
        const nuevaPestana = window.open('', '_blank');

        if (nuevaPestana) {
            nuevaPestana.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Resultados - ${formId.toUpperCase()}</title>
                    <style>
                        body {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            background-color: #f4f6f9;
                            color: #1f2937;
                            padding: 2rem;
                            display: flex;
                            justify-content: center;
                        }
                        .container {
                            background: white;
                            padding: 2rem;
                            border-radius: 10px;
                            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
                            max-width: 600px;
                            width: 100%;
                        }
                        h2 {
                            color: #2563eb;
                            margin-top: 0;
                            border-bottom: 2px solid #e5e7eb;
                            padding-bottom: 0.5rem;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 1rem;
                        }
                        .btn-cerrar {
                            margin-top: 1.5rem;
                            background-color: #3b82f6;
                            color: white;
                            border: none;
                            padding: 0.6rem 1.2rem;
                            border-radius: 6px;
                            cursor: pointer;
                            font-weight: bold;
                        }
                        .btn-cerrar:hover {
                            background-color: #2563eb;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>Resultados enviados desde ${formId.toUpperCase()}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #eee; text-align: left;">Campo</th>
                                    <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #eee; text-align: left;">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${detallesHTML || '<tr><td colspan="2" style="padding: 12px; text-align: center;">No se registraron datos.</td></tr>'}
                            </tbody>
                        </table>
                        <button class="btn-cerrar" onclick="window.close()">Cerrar pestaña</button>
                    </div>
                </body>
                </html>
            `);
            nuevaPestana.document.close();

            // Mensaje informativo en el formulario de la página principal
            const resp = document.getElementById(`respuesta${formId.replace('formulario', '')}`);
            if (resp) {
                resp.innerText = "¡Datos enviados a la nueva pestaña!";
            }
        } else {
            alert('Por favor, permite las ventanas emergentes (pop-ups) en tu navegador para ver los resultados.');
        }
    };

    // Asignar el evento submit a los 12 formularios
    for (let i = 1; i <= 12; i++) {
        const form = document.getElementById(`formulario${i}`);
        if (form) {
            form.addEventListener('submit', procesarFormulario);
        }
    }
});