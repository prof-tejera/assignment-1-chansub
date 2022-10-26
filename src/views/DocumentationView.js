import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

//import Loading from "../components/generic/Loading";
import Button from "../components/generic/Button";
import Panel from "../components/generic/Panel";

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
          title="Button "
          component={<Button className='btn-active' text='Start' />}
          propDocs={[
            {
              prop: "className",
              description: "If 'btn-disabled', disable button and grey it out.",
              type: "string",
              possibleValues: "btn-active | btn-disabled",
              defaultValue: "btn-active",
            },
            {
              prop: "text",
              description: "Updates the image path based on the text value passed in.",
              type: "string",
              possibleValues:"Start | Pause | End | Reset",
              defaultValue: "",
            },

          ]}
        />
        <DocumentComponent
          title="Panel "
          component={<Panel/>}
          propDocs={[
            {
              prop: "className",
              description: "Gives the wrapping div element a class name",
              type: "string",
              possibleValues: "",
              defaultValue: "",
            },
            {
              prop: "",
              description: "Places your component and HTML inside a div element",
              type: "string",
              possibleValues: "",
              defaultValue: "",
            }
          ]}
        />
      </div>
    </Container>
  );
};

export default Documentation;
