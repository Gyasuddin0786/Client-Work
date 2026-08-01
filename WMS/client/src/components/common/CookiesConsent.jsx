import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, ArrowRight } from "lucide-react";

const CookiesConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");

        
        if (consent === "accepted") return;

       
        const timer = setTimeout(() => {
            setVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setVisible(false);
    };

    const handleReject = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className="
        fixed
        bottom-5
        left-1/2
        z-[999]
        w-[95%]
        max-w-3xl
        -translate-x-1/2
        rounded-3xl
        border
        border-orange-500/30
        bg-slate-900/95
        backdrop-blur-xl
        shadow-2xl
        shadow-orange-500/20
        animate-in
        slide-in-from-bottom-10
        duration-500
      "
        >
            <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">

                {/* Left */}

                <div className="flex gap-4">

                    <div className="flex h-14 w-14 text-orange-600">

                        <Cookie size={28} className="mt-1 bg-orange-300 rounded" />

                    </div>

                    <div>

                        <h3 className="text-xl font-bold text-white">
                            Cookies & Privacy
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-slate-300">
                            We use cookies to improve your browsing experience,
                            analyze website traffic and enhance our services.
                            By clicking <strong>Accept</strong>, you agree to our
                            cookie usage.
                        </p>

                        <Link
                            to="/privacy-policy"
                            className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-orange-400 transition hover:text-orange-300"
                        >
                            Read Privacy Policy
                            <ArrowRight
                                size={14}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                    </div>

                </div>

                {/* Buttons */}

                <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={handleReject}
                        className="
              rounded-xl
              border
              border-slate-600
              px-6
              py-3
              font-medium
              text-slate-300
              transition-all
              duration-300
              hover:border-red-500
              hover:bg-red-500/10
              hover:text-red-400
            "
                    >
                        Reject
                    </button>

                    <button
                        type="button"
                        onClick={handleAccept}
                        className="
              rounded-xl
              bg-orange-500
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-orange-600
              hover:shadow-lg
              hover:shadow-orange-500/40
            "
                    >
                        Accept
                    </button>

                </div>

            </div>

        </div>
    );
};

export default CookiesConsent;