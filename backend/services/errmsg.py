error_text = ['robably this page was rename.',                 #404
              'You did too much requests, please try letter',  #429
              'Sorry server dont work.',                       #500
              'I don\'t understand what do you mean.'         #502
              ]

errmsg = {'404':error_text[0], 
          '429':error_text[1], 
          '500':error_text[2], 
          '502':error_text[3]
          }
