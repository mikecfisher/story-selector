import { act, renderHook, waitFor } from "@testing-library/react";
import { usePersonalizationForm } from "./use-personalization-form";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
  }),
  useSearchParams: () => [new URLSearchParams(), jest.fn()],
}));

describe("usePersonalizationForm", () => {
  it("should return the correct API", () => {
    const { result } = renderHook(() => usePersonalizationForm());

    expect(result.current.register).toBeDefined();
    expect(result.current.handleSubmit).toBeDefined();
    expect(result.current.errors).toBeDefined();
    expect(result.current.fields).toBeDefined();
    expect(result.current.onSubmit).toBeDefined();
    expect(result.current.handleAddField).toBeDefined();
  });
});
