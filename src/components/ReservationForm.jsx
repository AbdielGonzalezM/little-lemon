import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  Button,
  Text,
} from '@chakra-ui/react';

// Creamos el esquema de validación con Yup
const ReservationSchema = Yup.object().shape({
  nombre: Yup.string().required('El nombre es obligatorio'),
  motivo: Yup.string().optional(),
  medioContacto: Yup.string().oneOf(['email', 'whatsapp', 'llamada'], 'Selecciona un medio').required('El medio de contacto es requerido'),
  correo: Yup.string().email('Correo inválido').required('Este campo es obligatorio'),
  suscripcion: Yup.boolean(),
});

export default function ReservationForm({ onSuccess }) {
  return (
    <Box px={{ base: 4, md: 16 }} py={8}>
      <Heading as="h2" size="md" mb={6}>
        Información adicional
      </Heading>

      <Formik
        initialValues={{
          nombre: '',
          motivo: '',
          medioContacto: '',
          correo: '',
          suscripcion: false,
        }}
        validationSchema={ReservationSchema}
        onSubmit={(values) => {
          console.log('Valores del formulario:', values);
          // Aquí podrías enviar a una API, etc.
          if (onSuccess) onSuccess();
        }}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form>
            {/* Nombre */}
            <FormControl mb={4} isInvalid={!!errors.nombre && touched.nombre}>
              <FormLabel>Nombre *</FormLabel>
              <Field
                as={Input}
                name="nombre"
                placeholder="Nombre a quién se hará la reserva"
              />
              {errors.nombre && touched.nombre && (
                <Text color="red.500">{errors.nombre}</Text>
              )}
            </FormControl>

            {/* Motivo */}
            <FormControl mb={4}>
              <FormLabel>Motivo (Opcional)</FormLabel>
              <Field
                as={Select}
                name="motivo"
                placeholder="Ej. Cumpleaños"
              >
                <option value="cumpleaños">Cumpleaños</option>
                <option value="aniversario">Aniversario</option>
                <option value="otro">Otro</option>
              </Field>
            </FormControl>

            {/* Medio de contacto */}
            <FormControl
              mb={4}
              isInvalid={!!errors.medioContacto && touched.medioContacto}
            >
              <FormLabel>Medio de contacto *</FormLabel>
              <RadioGroup
                onChange={(value) => setFieldValue('medioContacto', value)}
                value={values.medioContacto}
              >
                <Stack direction="row">
                  <Radio value="email">Correo electrónico</Radio>
                  <Radio value="whatsapp">WhatsApp</Radio>
                  <Radio value="llamada">Llamada / SMS</Radio>
                </Stack>
              </RadioGroup>
              {errors.medioContacto && touched.medioContacto && (
                <Text color="red.500">{errors.medioContacto}</Text>
              )}
            </FormControl>

            {/* Correo electrónico */}
            <FormControl mb={4} isInvalid={!!errors.correo && touched.correo}>
              <FormLabel>Correo electrónico *</FormLabel>
              <Field
                as={Input}
                name="correo"
                placeholder="ej.email@littlelemon.com"
              />
              {errors.correo && touched.correo && (
                <Text color="red.500">{errors.correo}</Text>
              )}
            </FormControl>

            {/* Suscripción */}
            <FormControl mb={4}>
              <Checkbox
                isChecked={values.suscripcion}
                onChange={(e) => setFieldValue('suscripcion', e.target.checked)}
              >
                Mantenerme informado de las novedades
              </Checkbox>
            </FormControl>

            <Button type="submit" colorScheme="yellow" width="100%">
              Completar reserva
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
