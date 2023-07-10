import request from "supertest";
import { v4 as uuidv4 } from "uuid";

const PATH = {
  BASE: "localhost:8080/api/v1",
  PRODUCT: "/product",
};

describe(`POST ${PATH.PRODUCT}`, () => {
  test("Create product", async () => {
    const productExample = {
      name: uuidv4(),
      price: 2000,
      stock: 1,
    };
    const response = await request(PATH.BASE)
      .post(PATH.PRODUCT)
      .send(productExample);
    expect(response.body.error).toBe(false);
  });
});

describe(`GET ${PATH.PRODUCT}`, () => {
  test("Get all products should return status 200", async () => {
    const response = await request(PATH.BASE).get(PATH.PRODUCT).send();
    expect(response.statusCode).toBe(200);
  });
  test("Get all products should return an array", async () => {
    const response = await request(PATH.BASE).get(PATH.PRODUCT).send();
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});

describe(`PATCH ${PATH.PRODUCT}`, () => {
  test("Update a product should return different info", async () => {
    const productExample = {
      name: uuidv4(),
      price: 2000,
      stock: 1,
    };
    const productExampleUpdate = {
      name: uuidv4(),
      price: 4000,
      stock: 99,
    };
    // CREATING NEW PRODUCT
    const response = await request(PATH.BASE)
      .post(PATH.PRODUCT)
      .send(productExample);
    const updateResponse = await request(PATH.BASE)
      .patch(`${PATH.PRODUCT}/${response.body.data.id}`)
      .send(productExampleUpdate);
    expect(updateResponse.body.error).toBe(false);
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.body.message.includes("updated")).toBe(true);
  });
});

describe(`DELETE ${PATH.BASE}`, () => {
  test("Delete a product by id", async () => {
    const productExample = {
      name: uuidv4(),
      price: 2000,
      stock: 1,
    };
    const response = await request(PATH.BASE)
      .post(PATH.PRODUCT)
      .send(productExample);
    const deleteResponse = await request(PATH.BASE).delete(
      `${PATH.PRODUCT}/${response.body.data.id}`
    );
    expect(deleteResponse.body.error).toBe(false);
    expect(deleteResponse.body.data).toBe(1);
  });
});
