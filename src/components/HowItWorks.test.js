import { transformData } from './HowItWorks';

describe("Transform Data", () => {
  test("should take the latest step", () => {
    const input = [
      {
        "id": "422e6b50-9c5a-43d5-90cb-839f4678cb75",
        "stepNumber": "3",
        "versionContent": [
          {
            "title": "Keep What You Want",
            "body": "Tell us “no thanks” by returning any unwanted products in the enclosed packaging.",
            "effectiveDate": "2019-04-04T05:04:05.000Z"
          },
          {
            "title": "Keep What You Like",
            "body": "Tell us “no” by returning any unwanted products in the enclosed packaging.",
            "effectiveDate": "2019-04-04T03:04:05.000Z"
          },
          {
            "title": "Keep Everything",
            "body": "Tell us “no thanks” by returning any unwanted products in the enclosed packaging.",
            "effectiveDate": "2019-02-04T08:04:05.000Z"
          }
        ]
      }
    ]

    const expected = [{"title": "Keep What You Want"}];

    expect(transformData(input).title).toEqual(expected.title)
  });

  test("should place steps in correct order", () => {
    const input = [
      {
        "id": "d11b10ba-1cd8-48f8-93eb-454b716fd5a0",
        "stepNumber": "2",
        "versionContent": [{"title": "", "body": ""}]
      },
      {
        "id": "dce2554e-00dc-45c1-99c1-93a554d7eba7",
        "stepNumber": "4",
        "versionContent": [{"title": "", "body": ""}]
      },
      {
        "id": "422e6b50-9c5a-43d5-90cb-839f4678cb75",
        "stepNumber": "3",
        "versionContent": [{"title": "", "body": ""}]
      },
      {
        "id": "d9a439d0-8dbf-4bab-8e08-626f8194a075",
        "stepNumber": "1",
        "versionContent": [{"title": "", "body": ""}]
      }
    ];

    const expected = [
      {
        "id": "d9a439d0-8dbf-4bab-8e08-626f8194a075",
        "stepNumber": "1",
        "versionContent": [{"title": "", "body": ""}]
      },
      {
        "id": "d11b10ba-1cd8-48f8-93eb-454b716fd5a0",
        "stepNumber": "2",
        "versionContent": [{"title": "", "body": ""}]
      },
      {
        "id": "422e6b50-9c5a-43d5-90cb-839f4678cb75",
        "stepNumber": "3",
        "versionContent": [{"title": "", "body": ""}]
      },
      {
        "id": "dce2554e-00dc-45c1-99c1-93a554d7eba7",
        "stepNumber": "4",
        "versionContent": [{"title": "", "body": ""}]
      },
    ];

    const inputSteps = transformData(input).map(i => i.stepNumber);
    const expectedSteps = transformData(expected).map(e => e.stepNumber);

    expect(inputSteps).toEqual(expectedSteps);
  });
})