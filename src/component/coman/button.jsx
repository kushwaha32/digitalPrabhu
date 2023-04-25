
const Button = ({text}) => {
    return(
        <button type="submit" className="btn btn-primary mt-4 btn-custom">
               {text || "Send Message"} 
              </button>
    )
}

export default Button;