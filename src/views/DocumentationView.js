import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

//import Loading from "../components/generic/Loading";
import Button from "../components/generic/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

/**
 * You can document your components by using the DocumentComponent component
 */
const Documentation = () => {
  return (
    <Container>
      <div>
        <Title>Documentation</Title>
        <DocumentComponent
          title="Timers "
          component={<Button className='btn-end' text='End'/>}
          propDocs={[
            {
              prop: "className, text, disabled",
              description: "Stop button",
              type: "string",
              defaultValue: "Button",
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default Documentation;
