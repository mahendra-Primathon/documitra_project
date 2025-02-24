import FormHeader from "../components/form/FormHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormMain from "../components/form/FormMain";

const formPage = ()=>{
    return(
        <>
        <Header />
        <FormHeader />
        {/* <Footer/> */}
        <FormMain />
        </>
    )
};
export default formPage;