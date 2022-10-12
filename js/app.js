formulario.addEventListener('submit',function(e){

	e.preventDefault();

	var datos = new FormData(formulario);

	var monto = datos.get('Monto');

	onCheckout(monto)

})

/**
* Llamado al hacer clic en 'pagar'
*/
function onCheckout(precio)
{
	// Crea el pedido, basado en tu carrito
	var order = {
		"amount":   precio*100,
		"currency": "PEN",
		"orderId":  "myOrderId-999999",
		"customer": {
			"email": "sample@example.com"
		}
	};

	// Llame al servidor comercial para obtener el token del formulario y luego muestre el formulario de pago
	getFormToken(order, displayPaymentForm, alert);
}

/**
 * Obtener token de formulario del servidor comercial
 * @param order
 * @param resolve
 * @param reject
 */
function getFormToken(order, resolve, reject) {
	var request = new XMLHttpRequest();

	//Abra una nueva conexión, utilizando la solicitud POST en el URL endpoint
	request.open('POST', 'YOUR_SERVER/payment/init', true);
	request.setRequestHeader('Content-Type', 'application/json');

	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			resolve(this.response);
		}
		else
		{
			reject("Invalid server response. Code " + request.status);
		}
	};

	request.onerror = function (error) {
		reject(error);
	};

	// Enviar petición
	request.send(JSON.stringify(order));
}


/**
 * Mostrar el formulario de pago con el token de formulario de argumento
 * @param formToken
 */
function displayPaymentForm(formToken)
{
	// Mostrar el formulario de pago
	//document.getElementById('paymentForm').style.display = 'block';

	KR.setFormConfig({
		// Establecer token de formulario
		formToken: formToken,
	})

	.then(({KR}) =>
	KR.addForm("#form"))

	.then(({KR,result}) =>
	KR.showForm(result.formId))


	// Agregar oyente para enviar evento
	KR.onPaid();
}

/**
 * Llamado cuando el pago ha terminado
 * @param event
 */
function onPaid(event) {

	if (event.clientAnswer.orderStatus === "PAID") {
		// Eliminar el formulario de pago
		KR.removeForms();

	// Mostrar mensaje de éxito
	document.getElementById("paymentSuccessful").style.display = "block";
	} else {
	// Mostrar mensaje de error al usuario
	alert("Payment failed !");
	}
}