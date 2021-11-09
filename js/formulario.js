var a_formEmpresas = 0;
var a_formComunicacion = 0;

function habilitarBotonEmpresas(){
    var val = 0;
    empresa_nombre = document.getElementById("form-empresa__nombre").value;
    empresa_representante = document.getElementById("form-empresa__representante").value;
    empresa_contacto = document.getElementById("form-empresa__contacto").value;
    empresa_apoyo = document.getElementById("form-empresa__apoyo").value;

    if(empresa_nombre == "" || empresa_nombre == " ")
    {
        val++;
    }
    if(empresa_representante == "" || empresa_representante == " ")
    {
        val++;
    }
    if(empresa_contacto == "" || empresa_contacto == " ")
    {
        val++;
    }
    if(empresa_apoyo == "" || empresa_apoyo == " ")
    {
        val++;
    }
    if(val == 0)
    {
        document.getElementById("form-empresa__btnEnviar").disabled = false;
        estiloBoton("form-empresa__btnEnviar","#72cc4e");
    }
    else{
        document.getElementById("form-empresa__btnEnviar").disabled = true;
        estiloBoton("form-empresa__btnEnviar","#72cc4e7e");
    }
}

function habilitarBotonComunicacion(){
    var val = 0;
    comunicacion_nombre = document.getElementById("form-comunicacion__nombre").value;
    comunicacion_nombreP = document.getElementById("form-comunicacion__nombreP").value;
    comunicacion_contacto = document.getElementById("form-comunicacion__contacto").value;
    comunicacion_apoyo = document.getElementById("form-comunicacion__apoyo").value;

    if(comunicacion_nombre == "" || comunicacion_nombre == " ")
    {
        val++;
    }
    if(comunicacion_nombreP == "" || comunicacion_nombreP == " ")
    {
        val++;
    }
    if(comunicacion_contacto == "" || comunicacion_contacto == " ")
    {
        val++;
    }
    if(comunicacion_apoyo == "" || comunicacion_apoyo == " ")
    {
        val++;
    }
    if(val == 0)
    {
        document.getElementById("form-comunicacion__btnEnviar").disabled = false;
        estiloBoton("form-comunicacion__btnEnviar","#72cc4e");
    }
    else{
        document.getElementById("form-comunicacion__btnEnviar").disabled = true;
        estiloBoton("form-comunicacion__btnEnviar","#72cc4e7e");
    }
}

function estiloBoton(boton,color){
    document.getElementById(boton).style.backgroundColor = color;
}

function formEmpresas_send(){
    if(a_formEmpresas != 0)
    {
        document.getElementById("form-empresa__btnEnviar").disabled = true;
    }
    var botonEmpresas = document.getElementById("form-empresa__btnEnviar").disabled;
    if(botonEmpresas == false )
    {
        document.getElementById("form-empresa__btnEnviar").style.display = "none";
        document.getElementById("form-empresa__confirmation").style.display = "block";
        a_formEmpresas++;
    }
}

function formComunicacion_send(){
    if(a_formComunicacion != 0)
    {
        document.getElementById("form-comunicacion__btnEnviar").disabled = true;
    }
    var botonComunicacion = document.getElementById("form-comunicacion__btnEnviar").disabled;
    if(botonComunicacion == false )
    {
        document.getElementById("form-comunicacion__btnEnviar").style.display = "none";
        document.getElementById("form-comunicacion__confirmation").style.display = "block";
        a_formComunicacion++;
    }
}

document.getElementById("form-empresa__nombre").addEventListener("keyup", habilitarBotonEmpresas);
document.getElementById("form-empresa__representante").addEventListener("keyup", habilitarBotonEmpresas);
document.getElementById("form-empresa__contacto").addEventListener("keyup", habilitarBotonEmpresas);
document.getElementById("form-empresa__apoyo").addEventListener("keyup", habilitarBotonEmpresas);

document.getElementById("form-empresa__btnEnviar").addEventListener("click", formEmpresas_send);

document.getElementById("form-comunicacion__nombre").addEventListener("keyup", habilitarBotonComunicacion);
document.getElementById("form-comunicacion__nombreP").addEventListener("keyup", habilitarBotonComunicacion);
document.getElementById("form-comunicacion__contacto").addEventListener("keyup", habilitarBotonComunicacion);
document.getElementById("form-comunicacion__apoyo").addEventListener("keyup", habilitarBotonComunicacion);

document.getElementById("form-comunicacion__btnEnviar").addEventListener("click", formComunicacion_send);




