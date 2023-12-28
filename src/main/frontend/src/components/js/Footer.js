import React from 'react';
import "../css/Footer.css";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <MDBFooter className='text-lg-left Footer'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0 LeftFooter'>
            <h5 className='text-uppercase'><b>Dogether</b></h5>
            <p>
              A site that tells you where you can go with your pet dog.
              It includes not only restaurants and cafes, but also information about hospitals and accommodations.
              You can communicate with other dog owners and purchase pet supplies, and find out about news related to your dog at a fast pace.
            </p>
          </MDBCol>

          <MDBCol lg='4' md='12' className='mb-4 mb-md-0 RightFooter'>
            <h5 className='text-uppercase'>Do you want to know more about us?</h5>
            <p>
              Then visit our GitHub. You can see our team-project codes in here. We will welcome you.

            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}