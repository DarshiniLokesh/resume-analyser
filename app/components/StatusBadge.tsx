import { useState } from "react";

interface StatusBadgeProps {
    status?: "applied" | "interview" | "rejected" | "offer" | "pending";
}

const StatusBadge = ({ status = "applied" }: StatusBadgeProps) => {
    const getStatusConfig = (status: string) => {
        switch (status) {
            case "applied":
                return {
                    label: "Applied",
                    className: "bg-blue-100 text-blue-800 border-blue-200",
                    icon: "📝"
                };
            case "interview":
                return {
                    label: "Interview",
                    className: "bg-yellow-100 text-yellow-800 border-yellow-200",
                    icon: "🎯"
                };
            case "rejected":
                return {
                    label: "Rejected",
                    className: "bg-red-100 text-red-800 border-red-200",
                    icon: "❌"
                };
            case "offer":
                return {
                    label: "Offer",
                    className: "bg-green-100 text-green-800 border-green-200",
                    icon: "🎉"
                };
            case "pending":
                return {
                    label: "Pending",
                    className: "bg-gray-100 text-gray-800 border-gray-200",
                    icon: "⏳"
                };
            default:
                return {
                    label: "Applied",
                    className: "bg-blue-100 text-blue-800 border-blue-200",
                    icon: "📝"
                };
        }
    };

    const config = getStatusConfig(status);

    return (
        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${config.className}`}>
            <span>{config.icon}</span>
            <span>{config.label}</span>
        </div>
    );
};

export default StatusBadge; 