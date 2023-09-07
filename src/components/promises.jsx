import React from "react";
import { resolveBaseUrl } from "vite";

const Promises = () => {

    const productos = [
        {}
        {}
        {}
    ]

    const aplicarDescuento = new Promise((resolve, reject) => {
        const descuento = false
        if (descuento) {
            resolve("Descuento aplicado")
        } else {
            reject("no se pudo aplicar el descuento")
        }

    })

    //cons log aplicar desc.
    aplicarDescuento
    then((resultado) => {
        console.log(resultado)
    })
    catch((error) => {
        console.log(error) 
    })