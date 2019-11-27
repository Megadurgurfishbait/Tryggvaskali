export default function useValidation({ nafn, simanumer, netfang, texti }) {
  const errors = {};

  if (!nafn.length) {
    errors.name = "Nafn nauðsynlegt";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(netfang)) {
    errors.email = "Email er ekki á réttu sniði";
  }

  if (!/\d{7,20}/.test(simanumer)) {
    errors.phone = "Símanúmer er ekki á réttu sniði";
  }
  if (texti.length < 20) {
    errors.text = "Fyrirspurn ekki nógu löng.";
  }

  if (texti.length > 1000) {
    errors.text = "Fyrirspurn alltof löng!";
  }

  return errors;
}
