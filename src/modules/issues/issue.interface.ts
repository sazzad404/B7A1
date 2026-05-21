export interface Issue {
    id: number;
    title: string;
    description : string;
    type:"bug" | "feature_request" ;
    status: "open" | "resolved" | "in_progress" ;
    reporter_id: number;

}