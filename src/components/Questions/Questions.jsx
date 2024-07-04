

const Questions = () => {
    return (
        <div className="mt-20 w-[580px] lg:w-full">
            <button className="px-4 py-2 inter-500 bg-white border border-[#4d4c7b] rounded-full shadow-md">
                Faq
            </button>
            <h2 className="text-4xl inter-700 mt-6 font-semibold">Frequntly Asked Question</h2>
            {/* accordian */}

            <div className="mt-6 space-y-4">
      <div className="collapse collapse-arrow bg-[#fffff5]">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What are your office hours?
        </div>
        <div className="collapse-content bg-white">
          <p>
            Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#fffff5]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can I schedule an appointment?
        </div>
        <div className="collapse-content bg-white">
          <p>
            You can schedule an appointment by calling our office, visiting our website, or using our mobile app. We recommend scheduling in advance to ensure availability.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#fffff5]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do you accept insurance?
        </div>
        <div className="collapse-content bg-white">
          <p>
            Yes, we accept most major insurance plans. Please contact our office for more information about your specific insurance coverage.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#fffff5]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What should I bring to my appointment?
        </div>
        <div className="collapse-content bg-white">
          <p>
            Please bring your insurance card, a valid ID, and any relevant medical records or test results. It's also helpful to have a list of any medications you are currently taking.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#fffff5]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do you offer telemedicine appointments?
        </div>
        <div className="collapse-content bg-white">
          <p>
            Yes, we offer telemedicine appointments for certain conditions. Please contact our office to find out if your appointment can be conducted virtually.
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Questions;