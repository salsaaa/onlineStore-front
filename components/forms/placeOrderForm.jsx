import { Form, Input, Select, Button, Checkbox, Modal } from "antd";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { AddUser } from "../../redux/actions/userActions";

const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="20">+20</Option>
      <Option value="966">+966</Option>
      <Option value="90">+90</Option>
    </Select>
  </Form.Item>
);
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const PlaceOrderForm = (props) => {
  const router = useRouter();

  function success() {
    Modal.success({
      content: "Completed Successfully ...",
      onOk() {
        router.push("/");
      },
    });
  }
  const onFinish = (values) => {
    success();
    const user = values.user;
    const products = getProductsIds();
    //add user then add cart that related to that user but in one request
    props.AddUser({ user, products });
  };
  const getProductsIds = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    const productsIds = products.map((p) => {
      const productId = p._id;
      const actual_qnt = p.actual_qnt;
      return { productId, actual_qnt };
    });
    return productsIds;
  };
  return (
    <React.Fragment>
      <div className="">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "phone"]}
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name={["user", "address"]}
            label="Adress"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "note"]} label="Leave your message here">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Should accept agreement"),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Pay{" "}
              {typeof window !== "undefined" &&
                localStorage.getItem("tota_cost")}
              {typeof window !== "undefined" &&
                localStorage.getItem("currency")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { AddUser })(PlaceOrderForm);
