import Hero from "./components/hero";
import TextSection from "./components/TextSection";
import Services1 from "./components/Service1";

function App() {
  return (
    <>
      <Hero />
      <TextSection
        title="Keep track of your snippets"
        disc="Clipboard instantly stores any item you copy in the cloud, 
  meaning you can access your snippets immediately on all your 
  devices. Our Mac and iOS apps will help you organize everything."
      />

      <Services1/>

      <TextSection
        title="Access Clipboard anywhere"
        disc=" Whether you’re on the go, or at your computer, you can access all your Clipboard 
  snippets in a few simple clicks."
      />


    </>
  );
}

export default App;
/* 

  
  Keep track of your snippets

  

  

  

 

  Supercharge your workflow

  We’ve got the tools to boost your productivity.

  Create blacklists

  Ensure sensitive information never makes its way to your clipboard by excluding certain sources.

  Plain text snippets

  Remove unwanted formatting from copied text for a consistent look.

  Sneak preview

  Quick preview of all snippets on your Clipboard for easy access.

  Clipboard for iOS and Mac OS

  Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
  and you’re ready to start adding to your clipboard.

  Download for iOS
  Download for Mac

  FAQs
  Contact Us
  Privacy Policy
  Press Kit
  Install Guide */
