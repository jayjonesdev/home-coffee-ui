import { Provider } from "jotai"
import { useHydrateAtoms } from "jotai/utils"

export const HydrateAtoms = ({ initialValues, children }: { initialValues: any, children: React.ReactNode }) => {
    useHydrateAtoms(initialValues)
    return children
}

export const TestProvider = ({ initialValues, children }: { initialValues: any, children: React.ReactNode }) => (
    <Provider>
        <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
    </Provider>
)