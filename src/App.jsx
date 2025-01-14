import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Weather from "./components/weather/Weather";
import NotFound from "./components/notfound/NotFound";
import Protected from "./components/protected/Protected";
import Form from "./components/form/Form";

function App() {
  const [logged] = useState(false); // Change to test protected route
  return (
    <div className={'flex-col flex h-screen'}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route
					path="/protected"
					element={
						<Protected isLogged={logged}>
							<div>Sensitive data</div>
						</Protected>
					}
				/>
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
