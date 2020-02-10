import React, { useState } from "react";
import { Formik, Field } from "formik";
import s from "./app.component.css";
import * as yup from "yup";

const intialState = {
    nome: "",
    email: "",
    mensagem: ""
};
const userSchema = yup.object().shape({
    nome: yup.string().required("Preencha seu Nome"),
    mensagem: yup.string().required("Escreva uma mensagem"),
    email: yup
        .string()
        .email("Formato de email inválido")
        .required("Preencha seu Email"),
    password: yup
        .string()
        .required()
        .max(13)
        .min(8)
});
function formComponent(props) {
    const [user, setUser] = useState(intialState);
    return (
        <>
            <Formik
                initialValues={user}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(true);
                    setUser(values);
                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 2000);
                }}
                validationSchema={userSchema}
            >
                {props =>
                    !props.isSubmitting ? (
                        <form onSubmit={props.handleSubmit} className={s.form}>

                            <Field
                                type="text"
                                onChange={props.handleChange}
                                name="nome"
                                value={props.values.nome}
                                placeholder="Nome"
                                className={s.text_field}
                            />

                            {props.errors.nome && props.touched.nome ? (
                                <span className={s.field_text}>{props.errors.nome}</span>
                            ) : (
                                    ""
                                )}

                            <Field
                                type="email"
                                placeholder="Email"
                                onChange={props.handleChange}
                                name="email"
                                value={props.values.email}
                                className={s.text_field}
                            />

                            {props.errors.email && props.touched.email ? (
                                <span className={s.field_text}>{props.errors.email}</span>
                            ) : (
                                    ""
                                )}

                            <textarea name="mensagem" id="" cols="30" rows="10" onChange={props.handleChange} placeholder="Mensagem" />
                            {props.errors.mensagem && props.touched.mensagem ? (
                                <span className={s.field_text}>{props.errors.mensagem}</span>
                            ) : (
                                    ""
                                )}
                            <button
                                type="submit"
                                disabled={!props.dirty && props.isSubmitting}
                                className={`${s.button} ${s.submit_button}`}
                            >
                                Enviar
              </button>
                        
                        </form>
                    ) : (
                            <div className={s.overlay} />
                        )
                }
            </Formik>
        </>
    );
}

export default formComponent;