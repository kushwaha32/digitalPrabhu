const ContactInfo = ({ icon, heading, text, styleFont }) => {
  return (
    <>
      <figure>
        <i className={icon} style={styleFont}></i>
        <figcaption>
          <h3>{heading}</h3>
          <p>{text}</p>
        </figcaption>
      </figure>
    </>
  );
};

export default ContactInfo;
