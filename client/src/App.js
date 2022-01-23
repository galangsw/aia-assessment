import React from "react";
import AppRouter from "./Routes/index.js";
import AppLayout from "./Layout/AppLayout.js";
function App (){
    return(
        <div>
            <AppLayout>
              <AppRouter />
            </AppLayout>
        
        </div>
    )
}

export default App;