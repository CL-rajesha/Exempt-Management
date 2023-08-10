import React, { useEffect, useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "@mui/material";
import { Menu, Dropdown, Button, Button as AntButton } from "antd";
import { Form } from "react-bootstrap";
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import FeedbackForm from "../components/FeedbackForm";
import styles from "./Desktop3.module.css";
import { gql, useQuery } from "@apollo/client"; // Fixed the import here

const FETCH_ALLEXEPTION = gql`
  query getAllExemption {
    allExemptions {
      Action
      EntityName
      LicenseNumber
      RequestDate
      RequestID
      Source
      Status
    }
  }
`;


const Desktop3 = () => {
  const navigate = useNavigate();

  const onNavItemClick = useCallback(() => {
    navigate("/frame-20");
  }, [navigate]);

  const { loading, error, data } = useQuery(FETCH_ALLEXEPTION);

  useEffect(() => {
    if (data) {
      console.log("Exemption Data:", data.allExemptions);
    }
  }, [data]);

  return (
    <div className={styles.desktop3}>
      <FeedbackForm />
      <b className={styles.exemption}>Exemption</b>
      <b className={styles.allExemptions}>All Exemptions</b>
      <Dropdown
        className={styles.dropdownlink}
        overlay={
          <Menu>
            {[
              { value: "Option 1" },
              { value: "Option 2" },
              { value: "Option 3" },
            ].map((option, index) => (
              <Menu.Item key={index}>
                <a onClick={(e) => e.preventDefault()}>{option.value || ""}</a>
              </Menu.Item>
            ))}
          </Menu>
        }
        placement="bottomLeft"
        trigger={["hover"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          {`Quick Action `}
          <DownOutlined />
        </a>
      </Dropdown>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="/vector-47.svg" />
        <div className={styles.selectdefaultParent}>
          <Form.Select className={styles.selectdefaultFormselect}>
            <option>Select Status</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </Form.Select>
          <InputGroup className={styles.parent}>
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <ChakraInput
              variant="outline"
              size="md"
              placeholder="Search Entity"
            />
          </InputGroup>
        </div>
        <img className={styles.frameInner} alt="" src="/vector-47.svg" />
        <b className={styles.exemptionReport}>Exemption report</b>
        <div className={styles.frameParent}>
          <div className={styles.datePickerParent}>
            <TextField
              type="date"
              InputLabelProps={{ shrink: true }}
              label="To"
              variant="standard"
              size="small"
              color="primary"
              error
            />
            <img className={styles.vectorIcon} alt="" src="/vector-16.svg" />
            <TextField
              type="date"
              InputLabelProps={{ shrink: true }}
              label="To"
              variant="standard"
              size="small"
              color="primary"
              error
            />
          </div>
          <AntButton
            className={styles.buttonprimaryText}
            type="primary"
            name="Export Report "
            size="middle"
            shape="default"
            ghost
          >{`Export Report `}</AntButton>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.rowParent}>
            <table className={styles.table}>
        <thead>
          <tr>
            <th>Action</th>
            <th>Entity Name</th>
            <th>Source</th>
            <th>Request ID</th>
            <th>License Number</th>
            <th>Request Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.allExemptions.map((exemption, index) => (
              <tr  className={styles.hover}  key={index}>
                <td>{exemption.Action}</td>
                <td>{exemption.EntityName}</td>
                <td>{exemption.Source}</td>
                <td>{exemption.RequestID}</td>
                <td>{exemption.LicenseNumber}</td>
                <td>{exemption.RequestDate}</td>
                <td>
                  <div
                    style={{
                      color: exemption.Status === "Approved" ? "green" : "red",
                    }}
                  >
                    {exemption.Status}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
            </div>
            <div className={styles.buttonprimaryTextParent}>
              <AntButton type="primary" size="small" shape="round" ghost>
                Previous
              </AntButton>
              <AntButton type="primary" size="small" shape="circle">
                1
              </AntButton>
              <AntButton type="primary" size="small" shape="round">
                Next
              </AntButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop3;
