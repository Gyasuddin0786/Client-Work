import {
    ArrowRight,
} from "lucide-react";
import Button from "../../components/common/Button";
function RequestQuoteCompo() {
    return (
        <>
            {/* Final CTA */}
            <section className="bg-gray-50">
            <div className="mt-24 rounded-3xl bg-orange-400 p-10 text-center text-white">
                <h2 className="text-3xl font-bold">
                    Have a Similar Project?
                </h2>

                <p className="mt-4">
                    Share your requirements and we'll prepare a customized quotation.
                </p>

                <Button
                    to="/request-quote"
                    variant="primary"
                    className="mt-8"
                >
                    Request a Quote
                    <ArrowRight className="h-5 w-5" />
                </Button>
                </div>
            </section>
        </>
    );

}
export default RequestQuoteCompo;