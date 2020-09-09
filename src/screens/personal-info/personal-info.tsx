import React from 'react';
import { Text, Image, StyleSheet, View, } from 'react-native';
import images from '../../assets/images';
import { Button, FieldInput, Header } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { Form, Field } from 'react-final-form'
import { validatePersonalInfoForm } from './utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useGlobal } from 'reactn'
import { TUser } from 'src/typings';



export const PersonalInfo = () => {
  const { navigate } = useNavigation();
  const [, setUser] = useGlobal<any>('user')
  const navigateToEditPhoto = () => navigate('EditPhoto');
  const saveUser = (form: Partial<TUser>) => {
    setUser(form)
    navigateToEditPhoto()
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Header />
      <Text style={styles.title}>Fill THE FORM</Text>
      <Text style={styles.subtitle}>area with * must be filled</Text>
      <Form
        onSubmit={saveUser as any}
        validate={validatePersonalInfoForm}
        subscription={{ submitting: true, values: true }}
      >
        {({ values, submitting, handleSubmit }) => {
          return (
            <>
              <View style={styles.form}>
                <Text style={styles.formTitle}>Personal Info</Text>
                <Field name="fullName">
                  {({ meta, input }) => (
                    <FieldInput label='Full name*' placeholder='type your full name'{...input} {...meta} />
                  )}
                </Field>
                <Field name="position">
                  {({ meta, input }) => (
                    <FieldInput label='Position*' placeholder='for example: IOS developer, Designer'{...input} {...meta} />
                  )}
                </Field>
                <Field name="birthday">
                  {({ meta, input }) => (
                    <FieldInput label='Your birthday*' placeholder='dd.mm.yyyy' {...input} {...meta} />
                  )}
                </Field>
                <Field name="city">
                  {({ meta, input }) => (
                    <FieldInput label='City*' placeholder='Kharkiv' {...input} {...meta} />
                  )}
                </Field>
                <Field name="phoneNumber">
                  {({ meta, input }) => (
                    <FieldInput label='Phone number*' placeholder='+38 (0_ _) _ _ _ - _ _ - _ _' {...input} {...meta} />
                  )}
                </Field>
              </View>
              <Button onPress={handleSubmit}>Next</Button>
            </>
          )
        }}
      </Form>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 25,
    flexGrow: 1,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Bebas Neue",
    fontSize: 36,
    lineHeight: 43,
    color: "#000000",
    marginTop: 75.3,
    marginBottom: 0,
  },
  subtitle: {
    // fontFamily: "Roboto",
    fontSize: 10,
    lineHeight: 12,
    color: "#000000",
    marginTop: -6,
  },
  formTitle: {
    fontFamily: "Bebas Neue",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: 22,
    lineHeight: 26,
    color: "#00662B",
    marginTop: 27,
  },
  form: {
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 20,
  },
});