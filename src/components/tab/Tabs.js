import React from "react";
import { TabBlock, TabsContainer } from "./Tabs.styled";

export default function Tabs() {
  return (
    // btns & contents container
    <TabsContainer>
      {/* buttons wrapper */}
      <TabBlock>
        <button>MKT</button>
        <button>BD</button>
        <button>CS</button>
      </TabBlock>

      {/* contents wrapper */}
      <div>
        <hr />
        <h2>House of MKT</h2>
        <p>
          aaaLorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
          vel voluptatum?
        </p>
      </div>

      <div>
        <hr />
        <h2>House of BD</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
          vel voluptatum?
        </p>
      </div>

      <div>
        <hr />
        <h2>House of CS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
          vel voluptatum?
        </p>
      </div>
    </TabsContainer>
  );
}
