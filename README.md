# PopIn-PaymentFormT1-JavaScript

Ejemplo de un formulario popin con JavaScript, para poder ejecutar el siguiente ejemplo seguir los pasos del presente manual.

<a name="Requisitos_Previos"></a>

## Requisitos Previos

* Extraer credenciales del Back Office Vendedor. [Guía Aquí](https://github.com/izipay-pe/obtener-credenciales-de-conexion)
* Servidor Web o servidor local.

## 1.- Descargar
Descargar el proyecto .zip haciendo click [Aquí](https://github.com/izipay-pe/PopIn-PaymentFormT1-JavaScript/archive/refs/heads/main.zip) o clonarlo desde Git.  
```sh
git clone https://github.com/izipay-pe/PopIn-PaymentFormT1-JavaScript.git
``` 

## 2.- Subirlo a un servidor web o servidor local

* Servidor local:  
  puede instalar complementos como xampp o WampServer

* Servidor web:
  subir el proyecto a su servidor web

## 3.- Configurar claves

* Obtener claves de API REST desde guía de integración ver [Requisitos Previos](#Requisitos_Previos).

* Editar en src/index.html en la sección HEAD:

```html
<script 
    type="text/javascript"
    src="https://api.micuentaweb.pe/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js" 
    kr-public-key="~~CHANGE_ME_PUBLIC_KEY~~"
    kr-get-url-success="~~CHANGE_ME_PAGE_REDIRECTION~~"       
    kr-language="es-ES"
>
</script>
``` 

* Editar el endpoint el cual retornara el formtoken en src/app.js:

```javascript 
	request.open('POST', 'YOUR_SERVER/payment/init', true);
	request.setRequestHeader('Content-Type', 'application/json');
```

## 4.- Implementar IPN

* Ver manual de implementacion de la IPN [Aquí](https://secure.micuentaweb.pe/doc/es-PE/rest/V4.0/kb/payment_done.html)
* Ver el ejemplo de la respuesta IPN [Aquí](https://github.com/izipay-pe/Redirect-PaymentForm-IpnT1-PHP)

## 5.- Demo
* url de ejemplo subido. [Aquí](https://prueba55.herokuapp.com/)
