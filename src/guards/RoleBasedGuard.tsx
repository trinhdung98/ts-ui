import React from 'react';
import { Container, Alert, AlertTitle } from '@material-ui/core';

// ----------------------------------------------------------------------

export interface RoleBasedGuardProps {
    accessibleRoles: Array<string>; // Example ['admin', 'leader']
    children?: React.ReactNode;
}

const useCurrentRole = () => {
    // Logic here to get current user role
    const role = 'admin';
    return role;
};

export default function RoleBasedGuard({ accessibleRoles, children }: RoleBasedGuardProps) {
    const currentRole = useCurrentRole();

    if (!accessibleRoles.includes(currentRole)) {
        return (
            <Container>
                <Alert severity="error">
                    <AlertTitle>Permission Denied</AlertTitle>
                    You do not have permission to access this page
                </Alert>
            </Container>
        );
    }

    return <>{children}</>;
}
