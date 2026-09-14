  <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <script>
        $(document).ready(function() {
            
            // Función para realizar la suma
            $('#boton4').on('click', function(e) {
                e.preventDefault();
                var num1 = parseFloat($('#vs1').val());
                var num2 = parseFloat($('#vs2').val());
                
                if (!isNaN(num1) && !isNaN(num2)) {
                    $('#Rs').text(num1 + num2);
                } else {
                    $('#Rs').text('Error');
                }
            });

            // Nombre asignado
            var nombreCompleto = "Diego Alonzo Florez Hurtado";

            // Cambios de texto para los botones de la Fila 1
            $('#boton1').on('click', function() {
                $('#titulo1').text(nombreCompleto);
            });

            $('#boton2').on('click', function() {
                $('#titulo2').text(nombreCompleto);
            });

            $('#boton3').on('click', function() {
                $('#titulo3').text(nombreCompleto);
            });

            // Evento para el botón de la tarjeta corta en Fila 2
            $('#boton_f2_1').on('click', function() {
                $('#titulo_f2_1').text(nombreCompleto);
            });

        });
    </script>
</body>
</html>