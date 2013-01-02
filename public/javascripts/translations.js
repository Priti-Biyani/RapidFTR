var I18n = I18n || {};
I18n.translations = {"en":{"forms":{"save_details":"Save Details","save":"Save Form","cannot_be_edited":"Fields on this form cannot be edited.","label":"Forms","messages":{"use_existing":"We encourage you to use the existing forms as this makes data sharing and data merging between institutions easier."}},"phone":"Phone","date_format":"yy-mm-dd","permissions":{"label":"Permissions","group":{"Devices":"Devices","Children":"Children","Reports":"Reports","Roles":"Roles","Forms":"Forms","Users":"Users","System":"System"}},"home":{"welcome":"Welcome to RapidFTR","records_need_attention":"Records need Attention","view_all_children":"View All Children","current_time_zone":"Current time zone"},"child":{"actions":{"reunite":"Reunite","mark_as_reunited":"Mark as Reunited","export_to_pdf":"Export to PDF","undo_investigated":"Undo Investigated","reunited_details":"Reunite Details:","not_reunited":"Mark as Not Reunited","undo_investigation_details":"Undo Investigation Details","mark_as_not_investigated":"Mark as Not Investigated","export_to_csv":"Export to CSV","export_to_photo_wall":"Export to Photo Wall","reunited":"Mark as Reunited","undo_reunite":"Undo Reunite","mark_as_investigated":"Mark as Investigated","change_log":"Change Log","undo_reunited_details":"Undo reunite Reason:","investigation_details":"Investigation Details"},"flagged_by":"Flagged By","another_duplicate_after_link":" to see the duplicate record.","flagged_as_suspected":"Flagged as suspect record by","mark_as_duplicate_with_param":"Mark %{child_name} as Duplicate","flag_error_message":"Please explain why you are flagging this record.","unflag_record":"Unflag record","manage_photos":"Manage photos","mark_as_duplicate":"Mark as Duplicate","posted_from_mobile":"Posted from the mobile client at:","registered_by":"Registered by","unflag_reason":"Unflag Reason","edit":"Edit Child","unflag_error_message":"Please explain why you are unflagging this record.","edit_photo":"Edit photo","flag_record":"Flag record","flag_reason":"Flag Reason","view":"View Children","another_duplicate_before_link":"Another record has been marked as a duplicate of this one. Click","flag_label":"Flag","unflag_label":"Unflag","messages":{"undo_reunite_error_message":"Please confirm child should be marked as Not Reunited, and enter any details you have.","flag_prefix":"Record was flagged by","investigation_error_message":"Please confirm the flagged record should be marked as investigated, and enter any details you have.","reunite_error_message":"Please confirm this child has been reunited with family or caregivers, and enter any details you have.","see_full_size":"Click on the Image to see full size","undo_investigation_error_message":"Undo Investigation Details:","unflag_prefix":"Record was unflagged by","update_success":"Child was successfully updated."},"change_log":"Change Log","reunite_details":"Reunite Details:","last_updated":"Last updated","investigation_details":"Investigation Details:"},"advanced_search":{"created_by_org":"Created Organisation :","select_a_criteria":"Select A Criteria","before":"Before :","instruction":"Separate words by OR to search for more than one option eg. Tim OR Rahul","date_instruction":"Enter a date (yyyy-mm-dd) in the first box to search records created or updated after that date.       Enter a date (yyyy-mm-dd) in the second box to see records created or updated before that date.       Enter dates in both boxes to see records created between the dates.","after":"After :","created_by":"Created by(User) :","date_updated":"Date Updated :","updated_by":"Updated by(User) :","date_created":"Date Created :"},"location":"Location","belonging_to":"belonging to","form_section":{"hide":"Hide","actions":{"save_order":"Save Order","add_custom_field":"Add Custom Field"},"create":"Create New Form Section","back":"Back To Forms Page","details":"Form details","manage":"Manage Form Sections","edit":"Edit Form Sections","show":"Show","label":"Form Section","ordering":"Ordering","messages":{"correct_errors":"Please correct the following errors and resubmit:","updated":"Form section successfully added","order_saved":"Order is successfully saved.","cannot_create":"Form section could not be created"},"visibility":"Visibility"},"users":{"actions":{"show":"Show","show_all":"Showing all"},"sort_by":{"full_name":"Full Name","label":"Sort by"},"create":"Create User","manage":"Manage Users","label":"Users","messages":{"disable":"Are you sure you want to disable this user?"}},"organisation":"Organisation","fields":{"action":"Action","remove":"remove","form_name":"Form Name","field_name":"Field Name"},"false":"false","select_all":"Select all records","date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"order":["year","month","day"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"formats":{"short":"%b %d","long":"%B %d, %Y","default":"%Y-%m-%d"}},"visible":"Visible","errors":{"format":"%{attribute} %{message}","dynamic_format":"%{message}","messages":{"too_short":"is too short (minimum is %{count} characters)","less_than_or_equal_to":"must be less than or equal to %{count}","inclusion":"is not included in the list","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","confirmation":"doesn't match confirmation","exclusion":"is reserved","blank":"can't be blank","empty":"can't be empty","greater_than_or_equal_to":"must be greater than or equal to %{count}","even":"must be even","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","not_a_number":"is not a number","accepted":"must be accepted","too_long":"is too long (maximum is %{count} characters)","invalid":"is invalid","odd":"must be odd","wrong_length":"is the wrong length (should be %{count} characters)"}},"role":{"create":"Create Role","name":"Name"},"true":"true","administration":"Administration","details":"Details","will_paginate":{"previous_label":"&#8592; Previous","page_entries_info":{"multi_page":"Displaying %{model} %{from} - %{to} of %{count} in total","single_page":{"other":"Displaying all %{count} %{model}","zero":"No %{model} found","one":"Displaying 1 %{model}"},"multi_page_html":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total","single_page_html":{"other":"Displaying <b>all&nbsp;%{count}</b> %{model}","zero":"No %{model} found","one":"Displaying <b>1</b> %{model}"}},"page_gap":"&hellip;","next_label":"Next &#8594;"},"description":"Description","new":"New","time":{"am":"am","pm":"pm","formats":{"short":"%d %b %H:%M","long":"%B %d, %Y %H:%M","default":"%a, %d %b %Y %H:%M:%S %z"}},"position":"Position","number":{"precision":{"format":{"delimiter":""}},"format":{"precision":3,"separator":".","delimiter":",","strip_insignificant_zeros":false,"significant":false},"currency":{"format":{"separator":".","precision":2,"format":"%u%n","delimiter":",","unit":"$","strip_insignificant_zeros":false,"significant":false}},"percentage":{"format":{"delimiter":""}},"human":{"format":{"precision":3,"delimiter":"","strip_insignificant_zeros":true,"significant":true},"decimal_units":{"format":"%n %u","units":{"quadrillion":"Quadrillion","unit":"","million":"Million","billion":"Billion","trillion":"Trillion","thousand":"Thousand"}},"storage_units":{"format":"%n %u","units":{"byte":{"other":"Bytes","one":"Byte"},"tb":"TB","kb":"KB","mb":"MB","gb":"GB"}}}},"activerecord":{"errors":{"template":{"body":"There were problems with the following fields:","header":{"other":"%{count} errors prohibited this %{model} from being saved","one":"1 error prohibited this %{model} from being saved"}}}},"add":"add","header":{"welcome":"Welcome","my_account":"My Account","system_settings":"System settings","contact":"Contact & Help","logout":"Logout"},"datetime":{"distance_in_words":{"almost_x_years":{"other":"almost %{count} years","one":"almost 1 year"},"x_months":{"other":"%{count} months","one":"1 month"},"about_x_hours":{"other":"about %{count} hours","one":"about 1 hour"},"x_days":{"other":"%{count} days","one":"1 day"},"about_x_years":{"other":"about %{count} years","one":"about 1 year"},"half_a_minute":"half a minute","over_x_years":{"other":"over %{count} years","one":"over 1 year"},"about_x_months":{"other":"about %{count} months","one":"about 1 month"},"less_than_x_minutes":{"other":"less than %{count} minutes","one":"less than a minute"},"x_seconds":{"other":"%{count} seconds","one":"1 second"},"less_than_x_seconds":{"other":"less than %{count} seconds","one":"less than 1 second"},"x_minutes":{"other":"%{count} minutes","one":"1 minute"}},"prompts":{"month":"Month","hour":"Hour","day":"Day","second":"Seconds","year":"Year","minute":"Minute"}},"hidden":"Hidden","contact":{"updated":"Contact information was successfully updated.","field":{"phone":"Phone","location":"Location","position":"Position","email":"Email","name":"Name","organization":"Organization","other_information":"Other information"},"edit_info":"Edit Contact Information","message":"If you experience any problems with RapidFTR, or believe your password has been exposed, please contact the system administrator immediately.","info_label":"Contact Information"},"discard":"Discard","admin":{"contact_info":"Admin Contact Information","highlight_fields":"Highlight Fields"},"login":{"username":"User Name","details":"Login details","password":{"reset":"Request Password Reset","re_enter":"Re-enter password","label":"Password"}},"search":"Search","buttons":{"reunite":"Reunite","back":"Back","save":"Save","edit":"Edit","login":"Log in"},"device":{"timestamp":"Timestamp","mobile_number":"Mobile Number","messages":{"disable":"Are you sure you want to disable this device?","remove_blacklist":"Do you want to remove this device from blacklist?","blacklist":"Do you want to add this device to blacklist?"},"information":"Device Information","blacklist":"Blacklist Device"},"devices":"Devices","status":"Status","help_text":"Help text","children":{"order_by":{"most_recently":"most recently","name":"name","label":"Order by"},"flag_summary":"Flag summary","filer_by":{"all":"All","active":"Active","reunited":"Reunited","flagged":"Flagged"},"export_all_child_records_to_csv":"Export All Child Records to CSV","export_some_records_to_csv":"Export Some Records to CSV","export":"Export","export_all_child_records_to_pdf":"Export All Child Records to PDF","label":"Children","filter_by":{"all":"All","active":"Active","reunited":"Reunited","flagged":"Flagged","label":"Filter by"},"register_new_child":"Register New Child"},"navigation":{"forms":"FORMS","advanced_search":"Advanced Search","reports":"REPORTS","users":"USERS","devices":"DEVICES","search":"Search","children":"CHILDREN","go":"Go"},"message":null,"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"enabled":"Enabled","user":{"actions":{"delete":"Delete"},"disabled":"Disabled?","create":"Create","no_blank":"user name should not contain blanks","update":"Update","full_name":"Full Name","label":"user","messages":{"confirmation":"Are you sure you want to delete this user? Deletion can not be undone. Click OK To Delete User."}},"email":"Email","name":"Name","record":"record","session_expire":"Your session is about to expire!","helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"messages":{"logoff":"No, Logoff","logoff_confirmation":"Do you want to continue your session?","primary_photo_changed":"Primary photo changed.","hide_forms":"Are you sure you want to hide these form(s)?","are_you_sure":"Are you sure you want to ","this_user":" this user?","cancel_confirmation":"Are you sure you want to cancel?","enter_valid_field_value":"Please enter a valid field value.","delete_item":"Warning: If you continue, any data associated with this field will be lost.\nIf you\\'re uncertain, disable the field instead.\nClick Cancel to go back. Click OK to Delete the field.","move_item_prefix":"You are about to move this field to another form section (","logoff_warning_suffix":"seconds.","show_hide_forms":"Please select form(s) you want to show/hide.","logoff_warning_prefix":"You will be logged off in","valid_search_criteria":"Please enter at least one search criteria","select_photo":"Please select a photo.","keep_working":"Yes, Keep Working","move_item_suffix":"). Is this OK?","show_forms":"Are you sure you want to make these form(s) visible?","warning":"Warning: If you continue, any data associated with this field will be lost.\nIf you're uncertain, disable the field instead.\nClick Cancel to go back. Click OK to Delete the field.","confirmation_message":"Clicking OK Will Discard Any Unsaved Changes. Click Cancel To Return To The Child Record Instead.","enter_valid_date":"Please enter a valid 'After' and/or 'Before' Date Created (format yyyy-mm-dd)."},"cancel":"Cancel","blacklisted":"Blacklisted?","form":"Form","hello":"Hello","preposition":{"because":"Because","on_label":"on"},"yes_label":"Yes","no_results_found":"No results found","roles":{"actions":{"edit":"Edit","show":"Show","show_all":"Showing all"},"sort_by":{"label":"Sort by"},"list":"List of Roles","name":"Role Name","label":"Roles"},"mandatory_field":"marked fields are mandatory","imei":"IMEI"}};