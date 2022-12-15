class usuario{
    usuario(user,pass,dpi,name,tel,tipo,email){
        this.user=user
        this.pass=pass
        this.dpi=dpi
        this.name=name
        this.tel=tel
        this.tipo=tipo
        this.email=email
    }
    mostrar(){
        console.log("Usuario:"+this.user+" Password: "+this.pass+" DPI:"+this.dpi+" Nombre: "+this.name+" telefono: "+this.tel+" Tipo: "+this.tipo+" email: "+this.email+" _")
    }
}