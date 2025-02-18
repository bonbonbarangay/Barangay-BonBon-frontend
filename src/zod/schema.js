import * as z from "zod";
import { getFromLocalStorage } from "../utils/localStorage";
import { calculateAge } from "../utils/computeAge";
const useridFromLocalStorage = getFromLocalStorage("id");

export const houseHeadSchema = z
  .object({
    // Personal Details
    userid: z.string().default(useridFromLocalStorage), // Use the value from localStorage
    lastnamehead1: z.string().min(1, "Last name is required"),
    firstnamehead1: z.string().min(1, "First name is required"),
    mihead1: z.string().min(1, "Middle name is required"),
    exthead1: z.enum(["JR", "SR", "II", "III", "IV", "NONE"]).optional(),
    agehead1: z.string().min(1, "Age is required"),
    addresshead1: z.string().min(1, "Address is required"),
    dateofbirthhead1: z
      .string()
      .min(1, "Date of birth is required")
      .refine(
        (value) => {
          const age = calculateAge(value);
          return age >= 18;
        },
        { message: "You must be at least 18 years old" }
      ),
    genderhead1: z.enum(["FEMALE", "MALE", "LGBTQ"], {
      required_error: "Gender is required",
    }),
    civilstatushead1: z.enum(["MARRIED", "SINGLE"], {
      required_error: "Civil status is required",
    }),
    religionhead1: z.enum(
      [
        "CATHOLIC",
        "INC",
        "AGLIPAYAN",
        "BAPTIST",
        "EVANGELICAL_PROTESTANTISM",
        "ISLAM",
        "ROMAN_CATHOLIC",
        "SEVENTH_DAY_ADVENTIST",
        "BUDDHISM",
        "OTHERS",
      ],
      {
        required_error: "Religion is required",
      }
    ),
    religionotherhead1: z.string().optional(),
    typeofidhead1: z.enum(
      [
        "SSS",
        "PAGIBIG",
        "BIR",
        "DRIVERS_LICENSE",
        "GSIS",
        "PHILSYS",
        "PASSPORT",
        "POSTAL_ID",
        "PRC",
        "TIN",
        "UMID",
        "VOTERS_ID",
      ],
      {
        required_error: "Type of ID is required",
      }
    ),
    idnohead1: z.string().min(1, "ID number is required"),
    mobilenohead1: z
      .string()
      .min(1, "Mobile number is required")
      .max(11, "Mobile number must be 11 digits")
      .regex(/^\d+$/, "Mobile number must contain only digits"),
    occupationhead1: z.enum(
      [
        "IT",
        "BPO",
        "HEALTHCARE",
        "EDUCATION",
        "ENGINEERING",
        "SALES_MARKETING",
        "FINANCE_ACCOUNTING",
        "CONSTRUCTION",
        "HOSPITALITY_TOURISM",
        "MANUFACTURING",
        "LOGISTICS_SUPPLY_CHAIN",
        "TELECOMMUNICATIONS",
        "CREATIVE_ARTS_DESIGN",
        "REAL_ESTATE",
        "LEGAL_SERVICES",
        "AGRICULTURE",
        "RESEARCH_DEVELOPMENT",
        "HUMAN_RESOURCES",
        "ENVIRONMENTAL_SERVICES",
        "SOCIAL_SERVICES",
        "OTHERS",
      ],
      {
        required_error: "Occupation is required",
      }
    ),
    occupationotherhead1: z.string().optional(),

    skillshead1: z.string().optional(),
    companyaddresshead1: z.string().optional(),
    collegehead1: z
      .enum(["COLLEGE LEVEL", "UNDER GRADUATE", "POST GRADUATE", ""])
      .optional(),
    highschoolhead1: z
      .enum(["HIGH SCHOOL LEVEL", "HIGH SCHOOL GRADUATE", ""])
      .optional(),
    elementaryhead1: z
      .enum(["ELEMENTARY LEVEL", "ELEMENTARY GRADUATE", ""])
      .optional(),
    vocationalcoursehead1: z.string().optional(),

    //Type of Beneficiaries
    fourps: z.enum(["YES", "NO", ""]).optional(),
    uct: z.enum(["YES", "NO", ""]).optional(),
    soloparent: z.enum(["YES", "NO", ""]).optional(),
    seniorcitizen: z.enum(["YES", "NO", ""]).optional(),
    pwd: z.enum(["YES", "NO", ""]).optional(),
    ip: z.enum(["YES", "NO", ""]).optional(),
    // Spouse Details (Optional by default)
    lastnamehead2: z.string().optional(),
    firstnamehead2: z.string().optional(),
    mihead2: z.string().optional(),
    exthead2: z.enum(["JR", "SR", "II", "III", "IV", "NONE"]).optional(),
    agehead2: z.string().optional(),
    addresshead2: z.string().optional(),
    dateofbirthhead2: z
      .string()
      .min(1, "Date of birth is required")
      .refine(
        (value) => {
          const age = calculateAge(value);
          return age >= 18;
        },
        { message: "You must be at least 18 years old" }
      )
      .optional(),
    genderhead2: z.enum(["FEMALE", "MALE", "LGBTQ"]).optional(),
    civilstatushead2: z.string().optional(),
    religionhead2: z
      .enum(
        [
          "CATHOLIC",
          "INC",
          "AGLIPAYAN",
          "BAPTIST",
          "EVANGELICAL_PROTESTANTISM",
          "ISLAM",
          "ROMAN_CATHOLIC",
          "SEVENTH_DAY_ADVENTIST",
          "BUDDHISM",
          "OTHERS",
        ],
        {
          required_error: "Religion is required",
        }
      )
      .optional(),
    religionotherhead2: z.string().optional(),
    typeofidhead2: z
      .enum(
        [
          "SSS",
          "PAGIBIG",
          "BIR",
          "DRIVERS_LICENSE",
          "GSIS",
          "PHILSYS",
          "PASSPORT",
          "POSTAL_ID",
          "PRC",
          "TIN",
          "UMID",
          "VOTERS_ID",
        ],
        {
          required_error: "Type of ID is required",
        }
      )
      .optional(),
    idnohead2: z.string().optional(),
    mobilenohead2: z
      .string()
      .max(11, "Mobile number must be 11 digits")
      .regex(/^\d+$/, "Mobile number must contain only digits")
      .optional(),
    occupationhead2: z
      .enum(
        [
          "IT",
          "BPO",
          "HEALTHCARE",
          "EDUCATION",
          "ENGINEERING",
          "SALES_MARKETING",
          "FINANCE_ACCOUNTING",
          "CONSTRUCTION",
          "HOSPITALITY_TOURISM",
          "MANUFACTURING",
          "LOGISTICS_SUPPLY_CHAIN",
          "TELECOMMUNICATIONS",
          "CREATIVE_ARTS_DESIGN",
          "REAL_ESTATE",
          "LEGAL_SERVICES",
          "AGRICULTURE",
          "RESEARCH_DEVELOPMENT",
          "HUMAN_RESOURCES",
          "ENVIRONMENTAL_SERVICES",
          "SOCIAL_SERVICES",
          "OTHERS",
        ],
        {
          required_error: "Occupation is required",
        }
      )
      .optional(),
    occupationotherhead2: z.string().optional(),
    skillshead2: z.string().optional(),
    companyaddresshead2: z.string().optional(),
    collegehead2: z
      .enum(["COLLEGE LEVEL", "UNDER GRADUATE", "POST GRADUATE", ""])
      .optional(),
    highschoolhead2: z
      .enum(["HIGH SCHOOL LEVEL", "HIGH SCHOOL GRADUATE", ""])
      .optional(),
    elementaryhead2: z
      .enum(["ELEMENTARY LEVEL", "ELEMENTARY GRADUATE", ""])
      .optional(),
    vocationalcoursehead2: z.string().optional(),

    //members
    members: z
      .string()
      .min(1, "required field")
      .regex(/^\d+$/, " contain only digits"),
    children: z
      .string()
      .min(1, "required field")
      .regex(/^\d+$/, " contain only digits"),

    //question
    question1: z.enum(["YES", "NO"], {
      required_error: "Question 1 is Required",
    }),
    renting: z.enum(["YES", "NO"]).optional(),
    question2: z.string().min(1, "Question 2 is Required"),
    question3: z.enum(["YES", "NO"], {
      required_error: "Question 3 is Required",
    }),
    questionPrecinctNo: z.string().optional(),
    question4: z.enum(["YES", "NO"], {
      required_error: "Question 4 is Required",
    }),
    question5: z.enum(["YES", "NO"], {
      required_error: "Question 5 is Required",
    }),
    question6: z.enum(["YES", "NO"], {
      required_error: "Question 6 is Required",
    }),
    image: z
      .string()
      .min(1, "Image is required") // Ensure the image field is not empty
      .transform((value, ctx) => {
        // If the value is already a base64 string, return it
        if (value.startsWith("data:image")) {
          return value;
        }
        // Otherwise, throw an error
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid image format",
        });
        return z.NEVER;
      }),
    householdMembers: z
      .array(
        z.object({
          userid: z.string().default(useridFromLocalStorage), // Replace with actual value
          year: z.string().default(new Date().getFullYear().toString()), // Replace with actual value
          lastNameFirstName: z.string().min(1, "Full Name is required"),
          relation: z.enum(
            [
              "HUSBAND",
              "WIFE",
              "LIVE-IN-PARTNER",
              "SON",
              "DAUGHTER",
              "FATHER",
              "MOTHER",
              "BROTHER",
              "SISTER",
              "GRANDFATHER",
              "GRANDMOTHER",
              "GRANDSON",
              "GUARDIAN",
              "GRANDDAUGHTER",
              "UNCLE",
              "AUNT",
              "NEPHEW",
              "NIECE",
              "COUSIN",
            ],
            {
              required_error: "Relation is required",
            }
          ),
          pwd: z.enum(["YES", "NO"], {
            required_error: "PWD is required",
          }),
          gender: z.enum(["FEMALE", "MALE", "LGBTQ"], {
            required_error: "Gender is required",
          }),
          age: z.string().min(1, "Age is required"),
          dob: z.string().min(1, "Date of Birth is required"),
          education: z
            .enum(
              [
                "ELEMENTARY LEVEL",
                "ELEMENTARY GRADUATE",
                "HIGH SCHOOL LEVEL",
                "HIGH SCHOOL GRADUATE",
                "VOCATIONAL COURSE",
                "COLLEGE LEVEL",
                "COLLEGE GRADUATE",
                "POSTGRADUATE (E.G, MASTER'S DOCTORATE)",
                "OUT OF SCHOOL YOUTHS",
              ],
              { required_error: "Education is required" }
            )
            .default("ELEMENTARY LEVEL"),
          occupation: z
            .enum([
              "IT",
              "BPO",
              "HEALTHCARE",
              "EDUCATION",
              "ENGINEERING",
              "SALES_MARKETING",
              "FINANCE_ACCOUNTING",
              "CONSTRUCTION",
              "HOSPITALITY_TOURISM",
              "MANUFACTURING",
              "LOGISTICS_SUPPLY_CHAIN",
              "TELECOMMUNICATIONS",
              "CREATIVE_ARTS_DESIGN",
              "REAL_ESTATE",
              "LEGAL_SERVICES",
              "AGRICULTURE",
              "RESEARCH_DEVELOPMENT",
              "HUMAN_RESOURCES",
              "ENVIRONMENTAL_SERVICES",
              "SOCIAL_SERVICES",
              "OTHERS",
              "NONE",
            ])
            .default("NONE"),
          occupationother: z.string().optional(),
        })
      )
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.civilstatushead1 === "MARRIED") {
      const requiredSpouseFields = [
        { key: "lastnamehead2", message: "Spouse last name is required" },
        { key: "firstnamehead2", message: "Spouse first name is required" },
        { key: "mihead2", message: "Spouse middle name is required" },
        { key: "agehead2", message: "Spouse age is required" },
        { key: "addresshead2", message: "Spouse address is required" },
        {
          key: "dateofbirthhead2",
          message: "Spouse date of birth is required",
        },
        { key: "genderhead2", message: "Spouse gender is required" },
        { key: "civilstatushead2", message: "Spouse Civil Status is required" },

        { key: "religionhead2", message: "Spouse religion is required" },
        { key: "typeofidhead2", message: "Spouse type of ID is required" },
        { key: "idnohead2", message: "Spouse ID number is required" },
        { key: "mobilenohead2", message: "Spouse mobile number is required" },
      ];

      requiredSpouseFields.forEach(({ key, message }) => {
        if (!data[key]) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message,
            path: [key],
          });
        }
      });
    }

    if (data.question1 === "NO" && (data.renting === "" || !data.renting)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Renting is required",
        path: ["renting"],
      });
    }

    if (data.question3 === "YES" && !data.questionPrecinctNo) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Precinct Number is required",
        path: ["questionPrecinctNo"],
      });
    }

    if (data.religionhead1 === "OTHERS" && !data.religionotherhead1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Other Religion  is required",
        path: ["religionotherhead1"],
      });
    }

    if (data.occupationhead1 === "OTHERS" && !data.occupationotherhead1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Other Occupation is required",
        path: ["occupationotherhead1"],
      });
    }

    if (data.religionhead2 === "OTHERS" && !data.religionotherhead2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Other Religion is required",
        path: ["religionotherhead2"],
      });
    }

    if (data.occupationhead2 === "OTHERS" && !data.occupationotherhead2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Other Occupation is required",
        path: ["occupationotherhead2"],
      });
    }
  });
