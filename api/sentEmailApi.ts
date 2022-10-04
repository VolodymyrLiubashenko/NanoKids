import {InitialValuesInterface} from 'components/ContactForm/ContactForm';

interface sentEmailApiInterface {
  sent: (values: InitialValuesInterface) => Promise<Response | undefined>;
}

const sentEmailApi: sentEmailApiInterface = {
  sent: async (values) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/contact-form`,
        {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {'Content-type': 'aplication/json'},
        }
      );
      return res;
    } catch (error) {}
  },
};

export default sentEmailApi;
