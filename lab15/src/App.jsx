import React, { useState } from "react";
import SiteHeader from "./SiteHeader";
import JokeDisplay from "./jokeDisplay"; // Capitalized to match file name
import SiteFooter from "./Footer";
import InlineButton from "./InlineButton";
import InternalButton from "./InternalButton";
import ExternalButton from "./ExternalButton";
import LifecycleTracker from "./LifecycleTracker";
import StateCounter from "./StateCounter";
import ReducerCounter from "./ReducerCounter";
import JokeAPIFetcher from "./JokeAPIFetcher";
import AutoFocusInput from "./AutoFocusInput";
import { ThemeContextProvider } from "./ThemeContextProvider";
import { ThemeProviderDemo } from  "./ThemeSwitcher.jsx" 

import ParentComponent from "./ParentComponent";
import ControlledForm from "./ControlledForm";
import RefBasedForm from "./RefBasedForm";

function App() {
  const [showLifecycleComponent, toggleLifecycleComponent] = useState(true);

  return (
    <ThemeContextProvider> {/* ✅ Context provider wraps app */}
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <SiteHeader title="React Component Showcase" />

        <hr />
        <h2>1. Joke Generator</h2>
        <JokeDisplay />

        <hr />
        <h2>2. Button Styling</h2>
        <InlineButton>Inline</InlineButton>
        <InternalButton>Internal</InternalButton>
        <ExternalButton>External</ExternalButton>

        <hr />
        <h2>3. Lifecycle Tracker</h2>
        <button onClick={() => toggleLifecycleComponent(!showLifecycleComponent)}>
          {showLifecycleComponent ? "Unmount Component" : "Mount Component"}
        </button>
        {showLifecycleComponent && <LifecycleTracker />}

        <hr />
        <h2>4. Counter with useState</h2>
        <StateCounter />

        <hr />
        <h2>5. Counter with useReducer</h2>
        <ReducerCounter />

        <hr />
        <h2>6. Joke API Fetch</h2>
        <JokeAPIFetcher />

        <hr />
        <h2>7. Auto-Focus Input</h2>
        <AutoFocusInput />

        <hr />
        <h2>8. Theme Switcher</h2>
        <ThemeProviderDemo /> {/* ✅ Now available */}

        <hr />
        <h2>9. Props Demo</h2>
        <ParentComponent />

        <hr />
        <h2>10. Form with State</h2>
        <ControlledForm />

        <hr />
        <h2>11. Form with Ref</h2>
        <RefBasedForm />

        <hr />
        <SiteFooter />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
