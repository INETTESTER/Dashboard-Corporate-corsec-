//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';

import { SIEM_Event_Summary_cosec } from '../api/SIEM_Event_Summary_cosec.js';
import { SIEM_Affected_Organizations_cosec } from '../api/SIEM_Affected_Organizations_cosec.js';
import { SIEM_detail_cosec } from '../api/SIEM_detail_cosec.js';
import { SIEM_export_cosec } from '../api/SIEM_export_cosec.js';
import { SIEM_ticket_list_cosec } from '../api/SIEM_ticket_list_cosec.js';
import { SIEM_expoort_ticket_cosec } from '../api/SIEM_expoort_ticket_cosec.js';
import { SIEM_ticket_detail_cosec } from '../api/SIEM_ticket_detail_cosec.js';
import { EDR_ecurity_detail_cosec } from '../api/EDR_ecurity_detail_cosec.js';
import { EDR_security_export_cosec } from '../api/EDR_security_export_cosec.js';
import { EDR_antivirus_event_cosec } from '../api/EDR_antivirus_event_cosec.js';
import { EDR_antivirus_detail_cosec } from '../api/EDR_antivirus_detail_cosec.js';
import { EDR_antivirus_export_cosec } from '../api/EDR_antivirus_export_cosec.js';
import { Asset_management_graph_cosec } from '../api/Asset_management_graph_cosec.js';
import { Asset_management_detail_cosec } from '../api/Asset_management_detail_cosec.js';
import { Asset_management_export_cosec } from '../api/Asset_management_export_cosec.js';
import { Asset_management_overview_cosec } from '../api/Asset_management_overview_cosec.js';
import { Asset_management_export_overview_cosec } from '../api/Asset_management_export_overview_cosec.js';
import { Dashboard_graph_cosec } from '../api/Dashboard_graph_cosec.js';
import { Dashboard_magnitude_cosec } from '../api/Dashboard_magnitude_cosec.js';
import { Dashboard_magnitude_overall_cosec } from '../api/Dashboard_magnitude_overall_cosec.js';
import { Dashboard_Company_Attacks_cosec } from '../api/Dashboard_Company_Attacks_cosec.js';
import { Dashboard_All_Departments_cosec } from '../api/Dashboard_All_Departments_cosec.js';
import { Dashboard_All_Departments_export_cosec } from '../api/Dashboard_All_Departments_export_cosec.js';
import { Dashboard_event_cosec } from '../api/Dashboard_event_cosec.js';
import { Dashboard_service_cosec } from '../api/Dashboard_service_cosec.js';
import { Log_status_overview_cosec } from '../api/Log_status_overview_cosec.js';
import { Log_status_detail_cosec } from '../api/Log_status_detail_cosec.js';
import { Log_status_export_cosec } from '../api/Log_status_export_cosec.js';
import { Login_fail_graph_cosec } from '../api/Login_fail_graph_cosec.js';
import { Login_fail_detail_cosec } from '../api/Login_fail_detail_cosec.js';
import { Login_fail_export_cosec } from '../api/Login_fail_export_cosec.js';
import { backup_graph_cosec } from '../api/backup_graph_cosec.js';
import { backup_detail_cosec } from '../api/backup_detail_cosec.js';
import { backup_export_cosec } from '../api/backup_export_cosec.js';
import { DUO_detail_logs_cosec } from '../api/DUO_detail_logs_cosec.js';
import { DUO_graph_logs_cosec } from '../api/DUO_graph_logs_cosec.js';
import { DUO_export_logs_cosec } from '../api/DUO_export_logs_cosec.js';
import { DUO_summary_users_cosec } from '../api/DUO_summary_users_cosec.js';
import { DUO_export_user_cosec } from '../api/DUO_export_user_cosec.js';
import { Scan_port_scan_result_cosec } from '../api/Scan_port_scan_result_cosec.js';
import { Scan_port_detail_cosec } from '../api/Scan_port_detail_cosec.js';
import { Scan_port_report_cosec } from '../api/Scan_port_report_cosec.js';
import { Scan_port_customer_list_cosec } from '../api/Scan_port_customer_list_cosec.js';
import { Scan_port_Edit_Port_cosec } from '../api/Scan_port_Edit_Port_cosec.js';
import { Scan_port_Edit_Add_IP_cosec } from '../api/Scan_port_Edit_Add_IP_cosec.js';
import { company } from '../api/company.js';
import { encrypt } from '../api/encrypt.js';
import { decrypt } from '../api/decrypt.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  // ================= SIEM ========================
  //response = SIEM_Event_Summary_cosec()
  //response = SIEM_Affected_Organizations_cosec()
  //response = SIEM_detail_cosec()
  //response = SIEM_export_cosec()
  //response = SIEM_ticket_list_cosec()
  //response = SIEM_expoort_ticket_cosec()
  //response = SIEM_ticket_detail_cosec()

  // ================= EDR ========================
  //response = EDR_ecurity_detail_cosec()
  //response = EDR_security_export_cosec()
  //response = EDR_antivirus_event_cosec()
  //response = EDR_antivirus_detail_cosec()
  //response = EDR_antivirus_export_cosec()

  // ================= ASSET ========================
  //response = Asset_management_graph_cosec()
  //response = Asset_management_detail_cosec()
  //response = Asset_management_export_cosec()
  //response = Asset_management_overview_cosec()
  //response = Asset_management_export_overview_cosec()

  // ================= Dashboard ========================
  //response = Dashboard_graph_cosec()
  //response = Dashboard_magnitude_cosec()
  //response = Dashboard_magnitude_overall_cosec()
  //response = Dashboard_Company_Attacks_cosec()
  //response = Dashboard_All_Departments_cosec()
  //response = Dashboard_All_Departments_export_cosec()
  //response = Dashboard_event_cosec()
  //response = Dashboard_service_cosec()

  // ================= log_status ========================
  //response = Log_status_overview_cosec()
  //response = Log_status_detail_cosec()
  //response = Log_status_export_cosec()

  // ================= login_fail ========================
  //response = Login_fail_graph_cosec()
  //response = Login_fail_detail_cosec()
  //response = Login_fail_export_cosec()

  // ================= backup ========================
  //response = backup_graph_cosec()
  //response = backup_detail_cosec()
  //response = backup_export_cosec()

  // ================= duo ========================
  //response = DUO_detail_logs_cosec()
  //response = DUO_graph_logs_cosec()
  //response = DUO_export_logs_cosec()
  //response = DUO_summary_users_cosec()
  //response = DUO_export_user_cosec()

  // ================= Scan Port ========================
  //response = Scan_port_scan_result_cosec()
  //response = Scan_port_detail_cosec()
  //response = Scan_port_report_cosec()
  //response = Scan_port_customer_list_cosec()
  //response = Scan_port_Edit_Port_cosec()
  //response = Scan_port_Edit_Add_IP_cosec()

  // ================= All Page ========================
  //response = company()

  // ================= login ========================
  //response = encrypt()
  //response = decrypt()






  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };