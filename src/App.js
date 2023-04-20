import { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [companyName, setCompanyName] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="App p-4">
      <div className="flex gap-4">
        <label className="font-bold">NAME:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2"
        />
        <label className="mr-2 font-bold">COMPANY NAME:</label>
        <input
          type="text"
          name="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="border-2"
        />
        <label className="mr-2 font-bold">STATE:</label>
        <input
          type="text"
          name="name"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="border-2"
        />
        <label className="mr-2 font-bold">CITY:</label>
        <input
          type="text"
          name="name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border-2"
        />
      </div>

      <p className="p-8">
        <h1>Subject</h1>
        <p>
          {capitalizeWords(companyName)} | {state?.toUpperCase()}| Expo Booth
          Requirement | ExpoQuote
        </p>
        <br />
        <h1>Good Morning {name?.toUpperCase()},</h1>
        <br />
        <p>
          I am contacting you regarding the exhibitions that are happening in
          {state?.toUpperCase()} during 2023. We have had a number of our
          clients contact us about their upcoming exhibitions in the US. We will
          be assisting them to bring together their exhibition stands, so am
          looking for suitable stand builder in the US that can assist us.
        </p>
        <br />
        <p>
          Due to our growth as a company, we are also being contacted by new
          companies who are exhibiting in the USA and Canada. So, we are going
          to need stand builders to help us with their requirements also.
        </p>
        <br />
        <p>
          I would like to include {capitalizeWords(companyName)} as one of our
          exhibitions stand builders in {city?.toUpperCase()}. We are only
          seeking partnership with 2 or 3 businesses in each major location to
          assist us in providing designs & the stand build to our clients.
          Ideally, we are looking to work with boutique, independent stand
          builders which can provide a solid point of difference for our clients
          together with excellent support throughout the development of their
          projects.
        </p>
        <br />
        <p>
          There is no annual fee or any type of subscription-based payment to be
          on our panel. We provide you our full client specs and you can pick
          and chose which are suitable for you. Could you kindly reply to let me
          know if {capitalizeWords(companyName)} would like to be one of our
          {state?.toUpperCase()}
          {name?.toUpperCase()} stand builders and Leigh (our Director) will
          give you a call when convenient. If you do work outside of
          {city?.toUpperCase()} or
          {state?.toUpperCase()}, do let me know also.
        </p>
        <br />
        <p>
          If you would like to know a little more about our business, please
          visit https://expoquote.co/us/ Thank you very much for your time and I
          look forward to hearing from you.
        </p>
        <br />
        Kind regards,
      </p>
    </div>
  );
}

export default App;
