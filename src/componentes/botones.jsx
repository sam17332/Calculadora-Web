import React, { Component } from 'react';

class Botones extends Component{
    constructor(props){
        super(props);

        this.state = {
            input: 0,
            input2: 0,
            input3: 0,
            operacion: false,
            operacion2: false,
            suma: false,
            resta: false, 
            multi: false,
            divi: false,
            modulo: false,
            cont: false,
            cont2: 0
        }
    }

    

    uno(){
        if(this.state.cont == false){
            if(this.state.input < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == false){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input: parseFloat(this.state.input + "1"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    }
                }    
            }
            if(this.state.input2 < 100000000){
                    if(this.state.cont2 <= 8){
                    if(this.state.operacion == true){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input2: parseFloat(this.state.input2 + "1"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    } 
                }
            }
        }
        if(this.state.cont == true){
            this.setState({
                operacion: false,
                operacion2: false,
                cont: false
            })
        }
    }

    dos(){
        if(this.state.cont == false){
            if(this.state.input < 100000000){
                    if(this.state.cont2 <= 8){
                    if(this.state.operacion == false){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input: parseFloat(this.state.input + "2"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    }
                }
            }
            if(this.state.input2 < 100000000){
                    if(this.state.cont2 <= 8){
                    if(this.state.operacion == true){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input2: parseFloat(this.state.input2 + "2"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    } 
                }
            }
        }
        if(this.state.cont == true){
            this.setState({
                operacion: false,
                operacion2: false,
                cont: false
            })
        }
    }

    tres(){
        if(this.state.cont == false){
            if(this.state.input < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == false){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input: parseFloat(this.state.input + "3"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    }
                }
            }
            if(this.state.input2 < 100000000){
                if(this.state.operacion == true){
                    if(this.state.operacion2 == false){
                        this.setState({
                            input2: parseFloat(this.state.input2 + "3"),
                            input3: 0,
                            cont2: this.state.cont2 + 1
                        })
                    }
                } 
            }
        }
        if(this.state.cont == true){
            this.setState({
                operacion: false,
                operacion2: false,
                cont: false
            })
        }
    }

    cuatro(){
        if(this.state.cont == false){
            if(this.state.input < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == false){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input: parseFloat(this.state.input + "4"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    }
                }
            }
            if(this.state.input2 < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == true){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input2: parseFloat(this.state.input2 + "4"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    } 
                }
            }
        }
        if(this.state.cont == true){
            this.setState({
                operacion: false,
                operacion2: false,
                cont: false
            })
        }
    }

    cinco(){
        if(this.state.cont == false){
            if(this.state.input < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == false){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input: parseFloat(this.state.input + "5"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    }
                }
            }
            if(this.state.input2 < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == true){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input2: parseFloat(this.state.input2 + "5"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    }
                } 
            }
        }
        if(this.state.cont == true){
            this.setState({
                operacion: false,
                operacion2: false,
                cont: false
            })
        }
    }

    seis(){
        if(this.state.cont == false){
            if(this.state.input < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == false){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input: parseFloat(this.state.input + "6"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    }
                }
            }
            if(this.state.input2 < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == true){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input2: parseFloat(this.state.input2 + "6"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    } 
                }
            }
        }
        if(this.state.cont == true){
            this.setState({
                operacion: false,
                operacion2: false,
                cont: false
            })
        }
    }

    siete(){
            if(this.state.cont == false){
            if(this.state.input < 100000000){
                    if(this.state.cont2 <= 8){
                    if(this.state.operacion == false){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input: parseFloat(this.state.input + "7"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    }
                }
            }
            if(this.state.input2 < 100000000){
                    if(this.state.cont2 <= 8){
                    if(this.state.operacion == true){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input2: parseFloat(this.state.input2 + "7"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    } 
                }
            }
        }
        if(this.state.cont == true){
            this.setState({
                operacion: false,
                operacion2: false,
                cont: false
            })
        }
    }

    ocho(){
        if(this.state.cont == false){
            if(this.state.input < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == false){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input: parseFloat(this.state.input + "8"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    }
                }
            }
            if(this.state.input2 < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == true){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input2: parseFloat(this.state.input2 + "8"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    } 
                }
            }
        }
        if(this.state.cont == true){
            this.setState({
                operacion: false,
                operacion2: false,
                cont: false
            })
        }
    }

    nueve(){
        if(this.state.cont == false){
            if(this.state.input < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == false){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input: parseFloat(this.state.input + "9"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    }
                }
            }
            if(this.state.input2 < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == true){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input2: parseFloat(this.state.input2 + "9"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    } 
                }
            }
        }
        if(this.state.cont == true){
            this.setState({
                operacion: false,
                operacion2: false,
                cont: false
            })
        }
    }

    cero(){
        if(this.state.cont == false){
            if(this.state.input < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == false){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input: parseFloat(this.state.input + "0"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    }
                }
            }
            if(this.state.input2 < 100000000){
                if(this.state.cont2 <= 8){
                    if(this.state.operacion == true){
                        if(this.state.operacion2 == false){
                            this.setState({
                                input2: parseFloat(this.state.input2 + "0"),
                                input3: 0,
                                cont2: this.state.cont2 + 1
                            })
                        }
                    } 
                }
            }
        }
        if(this.state.cont == true){
            this.setState({
                operacion: false,
                operacion2: false,
                cont: false
            })
        }
    }

    punto(){  
        if(this.state.operacion == false){
            if(this.state.operacion2 == false){
                if(this.state.input <= 999999999){
                    if(this.state.input == this.state.input + "."){
                        this.setState({
                            input: this.state.input + "."
                        })
                    }
                }
            }
        }
        if(this.state.operacion == true){
            if(this.state.operacion2 == false){
                if(this.state.input2 <= 999999999){
                    if(this.state.input2 == this.state.input2 + "."){
                        this.setState({
                            input2: this.state.input2 + "."
                        })
                    }
                }
            }
        }    
    }

    AC(){
        this.setState({
            input: 0,
            input2: 0,
            input3: 0,
            operacion: false,
            operacion2: false,
            suma: false,
            resta: false, 
            multi: false,
            modulo: false,
            divi: false,
            modulo: false,
            input3: 0,
            cont2: 0
        })
    }

    suma(){
        this.setState({
            operacion: true,
            operacion2: false,
            suma: true,
            resta: false, 
            multi: false,
            modulo: false,
            modulo: false,
            divi: false,
            cont2: 0
        })
    }

    resta(){
        this.setState({
            operacion: true,
            operacion2: false,
            suma: false,
            resta: true, 
            multi: false,
            modulo: false,
            modulo: false,
            divi: false,
            cont2: 0
        })
    }

    multiplicacion(){
        this.setState({
            operacion: true,
            operacion2: false,
            suma: false,
            resta: false, 
            multi: true,
            modulo: false,
            modulo: false,
            divi: false,
            cont2: 0
        })
    }

    division(){
        this.setState({
            operacion: true,
            operacion2: false,
            suma: false,
            resta: false, 
            multi: false,
            modulo: false,
            modulo: false,
            divi: true,
            cont2: 0
        })
    }

    modulo(){
        this.setState({
            operacion: true,
            operacion2: false,
            suma: false,
            resta: false, 
            multi: false,
            modulo: false,
            modulo: true,
            divi: false,
            cont2: 0
        })
    }
    

    igual(){
        if(this.state.suma == true){
            if((parseFloat(this.state.input) + parseFloat(this.state.input2)) <= 999999999){
                this.setState({
                    input3: parseFloat(this.state.input) + parseFloat(this.state.input2),
                    operacion: true,
                    operacion2: true,
                    suma: false,
                    resta: false, 
                    multi: false,
                    modulo: false,
                    divi: false,
                    input: 0,
                    input2: 0, 
                    cont: true,
                    cont2: 0
                })
            }
            else{
                this.setState({
                    input3: "ERROR",
                    operacion: true,
                    operacion2: true,
                    suma: false,
                    resta: false, 
                    multi: false,
                    modulo: false,
                    divi: false,
                    input: 0,
                    input2: 0,
                    cont2: 0
                })
            }
        }
        if(this.state.resta == true){
            if(parseFloat(this.state.input) > parseFloat(this.state.input2)){
                this.setState({
                    input3: parseFloat(this.state.input) - parseFloat(this.state.input2),
                    operacion: true,
                    operacion2: true,
                    suma: false,
                    resta: false, 
                    multi: false,
                    modulo: false,
                    divi: false,
                    input: 0,
                    input2: 0,
                    cont2: 0
                })
            }
            else{
                this.setState({
                    input3: "ERROR",
                    operacion: true,
                    operacion2: true,
                    suma: false,
                    resta: false, 
                    multi: false,
                    modulo: false,
                    divi: false,
                    input: 0,
                    input2: 0,
                    cont2: 0
                })
            }   
        }
        if(this.state.multi == true){
            if((parseFloat(this.state.input) * parseFloat(this.state.input2)) <= 999999999)
            this.setState({
                input3: parseFloat(this.state.input) * parseFloat(this.state.input2),
                operacion: true,
                operacion2: true,
                suma: false,
                resta: false, 
                multi: false,
                modulo: false,
                divi: false,
                input: 0,
                input2: 0,
                cont2: 0
            })
            else{
                this.setState({
                    input3: "ERROR",
                    operacion: true,
                    operacion2: true,
                    suma: false,
                    resta: false, 
                    multi: false,
                    modulo: false,
                    divi: false,
                    input: 0,
                    input2: 0,
                    cont2: 0
                })
            }
        }
        if(this.state.divi == true){
            if(this.state.input2 != 0){
                this.setState({
                    input3: parseFloat(this.state.input / this.state.input2),
                    operacion: true,
                    operacion2: true,
                    suma: false,
                    resta: false, 
                    multi: false,
                    modulo: false,
                    divi: false,
                    input: 0,
                    input2: 0,
                    cont2: 0
                })
            }
            else{
                this.setState({
                    input3: "ERROR",
                    operacion: true,
                    operacion2: true,
                    suma: false,
                    resta: false, 
                    multi: false,
                    modulo: false,
                    divi: false,
                    input: 0,
                    input2: 0,
                    cont2: 0
                })
            }
        }
        if(this.state.modulo == true){
            this.setState({
                input3: (parseInt(this.state.input) % parseInt(this.state.input2)),
                operacion: true,
                operacion2: true,
                suma: false,
                resta: false, 
                multi: false,
                modulo: false,
                divi: false,
                input: 0,
                input2: 0
            })
        }
    }

    masmenos(){
            if(this.state.input != 0){
                this.setState({
                    input: "-" + this.state.input,
                    cont2: this.state.cont2 + 1
                })
            }
            if(this.state.input2 != 0){
                this.setState({
                    input2: "-" + this.state.input2,
                    cont2: this.state.cont2 + 1
                })
            }
            if(this.state.input3 != "ERROR"){
                if(this.state.input3 != 0){
                    this.setState({
                        input3: "-" + this.state.input3
                    })
                }
            }
        else{
            this.setState({
                input3: "ERROR"
            })
        }
        
    }

    render(){
        let despliegue = "" + (this.state.operacion == false ? this.state.input : this.state.operacion2 ? this.state.input3 : this.state.input2)

        console.log(despliegue.length)
        if(despliegue.length > 9){
            despliegue = despliegue.substring(0,9)
        }
        return(
            <div className="flex-container">
                <label className="input">{ despliegue }</label>
                <div className="botones">
                    <button className="botonArriba2" onClick = {this.AC.bind(this)}>AC</button>
                    <button className="botonArriba2" onClick = {this.masmenos.bind(this)}>+/-</button>
                    <button className="botonArriba2" onClick = {this.modulo.bind(this)}>%</button>
                    <button className="botonArriba" onClick = {this.division.bind(this)}>÷</button>
                    <button className="boton" onClick = {this.siete.bind(this)}>7</button>
                    <button className="boton" onClick = {this.ocho.bind(this)}>8</button>
                    <button className="boton" onClick = {this.nueve.bind(this)}>9</button>
                    <button className="botonArriba" onClick = {this.multiplicacion.bind(this)}>x</button>
                    <button className="boton" onClick = {this.cuatro.bind(this)}>4</button>
                    <button className="boton" onClick = {this.cinco.bind(this)}>5</button>
                    <button className="boton" onClick = {this.seis.bind(this)}>6</button>
                    <button className="botonArriba" onClick = {this.resta.bind(this)}>-</button>
                    <button className="boton" onClick = {this.uno.bind(this)}>1</button>
                    <button className="boton" onClick = {this.dos.bind(this)}>2</button>
                    <button className="boton" onClick = {this.tres.bind(this)}>3</button>
                    <button className="botonArriba" onClick = {this.suma.bind(this)}>+</button>
                    <button className="boton0" onClick = {this.cero.bind(this)}>0</button>
                    <button className="boton" onClick = {this.punto.bind(this)}>.</button>
                    <button className="botonArriba" onClick = {this.igual.bind(this)}>=</button>   
                </div>
            </div>
        )
    }
}

export default Botones;