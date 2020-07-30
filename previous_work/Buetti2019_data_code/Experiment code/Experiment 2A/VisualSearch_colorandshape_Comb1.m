
Screen('Preference', 'SkipSyncTests', 1 );
%Visual Search with colored distractors

%   Created by Deborah Cronin 
%   Modified by Zoe
%   Last modified: 10/02/2017 
%
%   This experiment uses a blue target (that faces left or right; the 
%   vertical line is the portion that people are responding to and asks participants 
%   to respond to the direction of the target using a key press (left arrow 
%   and right arrow corresponding to the left and right directions). The displays are 
%   composed of homogenous distractors that vary in set size at six levels that always 
%   included a target (1 or 0 distractors, 2, 5, 10, 20, 32). 
%
%   to adjust to grid_nc, jittle&offset in this code is suppressed

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

SbjID = input('Enter Subject Number:   ');

%%%%%%%%%%%%%%%%%% INITIALIZATION %%%%%%%%%%%%%%%%%%%%%%%%%%
   	rand('state',sum(100*clock));
    warning off MATLAB:DeprecatedLogicalAPI	  
    
   KbName('UnifyKeyNames');
    HideCursor
    %@@ comment out the previous line to run on Macs
    global Xcentre;
    global Ycentre;
    global cx;
    global cy;
    
    % Output file
    fid=fopen(['VisualSearch_colorandshape_' num2str(SbjID) '.out'],'a');  
    fprintf(fid, 'Subject     Trial   tss  tid   numd   dcolors   RT   resp  Error  loc1  loc2  loc3  loc4  loc5  loc6  loc7  loc8  loc9  loc10  loc11  loc12  loc13  loc14  loc15  loc16  loc17  loc18  loc19  loc20  loc21  loc22  loc23  loc24  loc25  loc26  loc27  loc28  loc29  loc30  loc31  loc32  loc33  loc34  loc35  loc36\r');  %'trial',-1,'tsetsize',1,'tid',1,'distcolors',-1,'colors',-1,'rt',-1,'resp',-1,'error',-1),...
       % 1,T_Trials);
    
    %% Reserving Memory Space for Big Variables  %%
    background=[0 0 0];
    %background=[153 153 153];
%     [rect]=[0 0 750 750];
[window,rect]=Screen('OpenWindow',max(Screen('Screens')),background);
%%To make the window a smaller size to for debugging    
% [window,rect]=Screen('OpenWindow',0, background, rect);
    


    Screen('TextSize',window,40);
    %creating a white background for a texture;
    white_background=zeros(rect(4),rect(3),3);
    white_background(:,:,1)=255;
    white_background(:,:,2)=255;
    white_background(:,:,3)=255;
    
    black_background=zeros(rect(4),rect(3),3);
    black_background(:,:,1)=0;
    black_background(:,:,2)=0;
    black_background(:,:,3)=0;
    
    grey_background=zeros(rect(4),rect(3),3);
    grey_background(:,:,1)=153;
    grey_background(:,:,2)=153;
    grey_background(:,:,3)=153;
    
    %Sizes and colors   
    XLeft=rect(RectLeft);	XRight=rect(RectRight);
	YTop=rect(RectTop);		YBottom=rect(RectBottom);
	Xcentre=XRight./2; 		Ycentre=YBottom./2;
    
    white=[255,255,255];
	black=[0,0,0];
	grey=(white+black)/2;  
    red=[255,0,0];
%   green=[0,255,0];
    blue=[0,0,255];
    yellow=[255,255,0];
    orange=[255,115,0];
    
    offset=15;
    jitter=50; %30;
    
    tsetsize=[1];     %number of blue half circle
    dsetsize=[0,1,4,9,19,31]; %number of distractors in display (yellow triangle, orange dimaonds, blue circles)
    dcolors=[0,1,2,3];   %noise colors (0=no noise distractors,1=orange, 2=blue, 3=yellow)
    
    %response keys- MAC
    escKey=KbName('ESCAPE');
    startKey=KbName('=+');
	LeftKey=KbName('LeftArrow');
    RightKey=KbName('RightArrow');
%     
%     %response keys- Windows
%     escKey=KbName('ESC');
%     startKey=KbName('=+');
%     LeftKey=KbName('Left');
%     RightKey=KbName('Right');
    
    %Durations
    refresh_rate=85;
    disp_time=10;  %desired amount of time display is on screen
    totaltime=5;   %round(refresh_rate*disp_time);
    ITI=fix(refresh_rate*3/2);
    fixtime=fix(refresh_rate/2);
    
    T_Trials=640;
% T_Trials=34;
%     
%-----------------------------------------
%    Design  
%-----------------------------------------
    DATA=repmat(struct('trial',-1,'tsetsize',1,'tid',1,'dsetsize',-1,'dcolors',-1,'dpoint',-1,'rt',-1,'resp',-1,'error',-1,...
        'loc1',-1,'loc2',-1,'loc3',-1,'loc4',-1,'loc5',-1,'loc6',-1,'loc7',-1,'loc8',-1,'loc9',-1,...
        'loc10',-1,'loc11',-1,'loc12',-1,'loc13',-1,'loc14',-1,'loc15',-1,'loc16',-1,'loc17',-1,'loc18',-1,...
        'loc19',-1,'loc20',-1,'loc21',-1,'loc22',-1,'loc23',-1,'loc24',-1,'loc25',-1,'loc26',-1,'loc27',-1,...
        'loc28',-1,'loc29',-1,'loc30',-1,'loc31',-1,'loc32',-1,'loc33',-1,'loc34',-1,'loc35',-1,'loc36',-1),1,T_Trials);
        % tsetsize 1
        % target identity  0:right T, 1=left T
        % noisecolor: 0=no noise; 1=orange; 2=blue
        % response: 1:'z' key  2:'/' key
        
        %OTHER THINGS TO SAVE: target location, location of all red items,
        %block number, 
        
        %INCLUDE BREAKS; SAVE IN CHUNKS THROUGHOUT; DESTROY DISPLAY AFTER
        %EVERY TRIAL
        
        % error 0:correct, 1:error
        
%        
    DUMMY=DATA;
    t=xlsread('searchtable.xls');
%     t=xlsread('searchtable2.xls');
    
%     DUMMY=DATA;
%     t=xlsread('searchdb.xls');

    for i=1:T_Trials 
        DUMMY(i).tsetsize=t(i,1);
        DUMMY(i).tid=t(i,2);  %tid= target id, codes target orientation
        DUMMY(i).dsetsize=t(i,3);
        DUMMY(i).dcolors=t(i,4);
    end
    seq=randperm(T_Trials);
    DATA=DUMMY(seq);
    for n=1:T_Trials
        DATA(n).trial=n;
    end;
    clear DUMMY;
    
    %Location Matrix
    locations=zeros(T_Trials,37);
    for i=1:T_Trials
        locations(i,1)=i;
    end
    
    endtrial=T_Trials;

%-------------------------------------
%     Load Distractor Images
%-------------------------------------

% g=imread('gsquare.jpg'); %green square %this is not needed for this
% experiment
%gr=Screen('MakeTexture',window,g);
b=imread('bcircle.jpg'); %blue circle
%bl=Screen('MakeTexture',window,b);
yr=imread('yRtri.jpg'); %right yellow triangle
%ye=Screen('MakeTexture',window,y);
yl=imread('yLtri.jpg');%left yellow triangle
o=imread('odiamond.jpg');%orange diamond
%og=Screen('MakeTexture',window,o);

% gr=Screen('MakeTexture',window,g);
bl=Screen('MakeTexture',window,b);
ylr=Screen('MakeTexture',window,yr);
yll=Screen('MakeTexture',window,yl);
og=Screen('MakeTexture',window,o);    


%---------------------------------------
%   Load Target Images
%---------------------------------------
%   From previous experiment colorsearch 5
%   the coding for rr rrt, rl and rlt are kept for ease of coding

% rr=imread('redRtri.jpg');
% rrt=Screen('MakeTexture', window,rr);
% % tid=0
% rl=imread('redLtri.jpg');
% rlt=Screen('MakeTexture', window,rl);
% % tid=1
% 

rr=imread('rlbcircle.jpg');
rrt=Screen('MakeTexture',window,rr);
%tid=0
rl=imread('llbcircle.jpg');
rlt=Screen('MakeTexture',window,rl);
%tid=1

%-------------------------------------
%     Present Instructions
%-------------------------------------

txt=[
    '\n \n'...
    'In this experiment you will see a series of displays containing colored shapes.\n\n'...
    'Among these shapes there will always be one blue semi-circle oriented \n\n' ...
    'with its arc to the left or the right of the vertical line.\n\n'...
    'Your task is to find the blue semi-circle and identify which direction it is \n\n'...
    'oriented. If the arc is to the left of the vertical line, you will respond with the left \n\n'...
    'arrow key. If the arc is to the right of the vertical line, you will \n\n'...
    'respond with the right arrow key.\n\n'...
    'Try to respond as quickly and accurately as you can. \n\n'...
    'There will be short breaks throughout the experiment. \n\n'...
    '\n\n'...
    'If you have any questions, please ask the experimenter now. \n'...
    '\n\n'];

Screen('TextSize',window,15);
DrawFormattedText(window,txt,'center','center',[255 255 255]);
Screen('Flip',window);
while KbCheck end
startexpe = [];

while isempty(startexpe)
    [keyIsDown, KbTime, keyCode] = KbCheck;
    if keyIsDown
        startexpe = find(keyCode);
        startexpe = startexpe(1);
    end
    if ~isempty(startexpe)
        if startexpe(1)==startKey
        break
        else startexpe=[];
        end
        
    end
end
    
    Screen('Flip',window);
    WaitSecs(3);

%-------------------------------------
%     Run Trials
%-------------------------------------

for itrial=1:T_Trials
    Screen('DrawLine',window,white,Xcentre-9,Ycentre,Xcentre+9,Ycentre)
    Screen('DrawLine',window,white,Xcentre,Ycentre-9,Xcentre,Ycentre+9)
    Screen('Flip',window, [],1);
    WaitSecs(1);
    %Draw trial contingent screens
    % search Screen:
    %         search=Screen('MakeTexture',window,black_background);
    
    %Screen('DrawLine',search,black,Xcentre-9,Ycentre,Xcentre+9,Ycentre)
    %Screen('DrawLine',search,black,Xcentre,Ycentre-9,Xcentre,Ycentre+9);
    
    %set up search grid
    ssmt=DATA(itrial).tsetsize;  %number of red items (target color)
    ssmd=DATA(itrial).dsetsize;  %number of distractors in display
    ssmT=ssmt+ssmd;        %total number of items in display
    ssmc=DATA(itrial).dcolors; %the color of the distactors in display
   
    %   colors: 0=no dist; 1=orange; 2=blue; 3=yellow
    
    
    
    %populate grid
    loc=zeros(1,36);
    loct=zeros(1,36);
    
    %%For the target only%%
    
    if (DATA(itrial).dsetsize==0)
        locd=zeros(1,36);
        locd(1,1)=1;
        %         i=2;
        %
        %         for i=1:36
        %             loc(1,i)=locd(iloc(i));
        %
        %             % locations(itrial,i+1)=loc(i);
        %         end
        
        iloc=randperm(numel(locd));
        for i=1:36
            loc(i)=locd(iloc(i));
            locations(itrial,i+1)=loc(i);
        end
        %populate grid
        for i=1:36
            if loc(i)==1
                grid_nc(i);
                tempor=fix(rand(1)*4)+1;
%                 tempx=cx+round(rand(1)*jitter)+offset;
%                 tempy=cy+(round(rand(1)*jitter))+offset;
                tempx = cx;
                tempy = cy;
                if DATA(itrial).tid==0
                    Screen('DrawTexture',window, rrt, [], [tempx tempy tempx+30 tempy+30]);
                elseif DATA(itrial).tid==1
                    Screen('DrawTexture',window, rlt, [], [tempx tempy tempx+30 tempy+30]);
                end;
            end
        end
        clear tempx
        clear tempy
        clear tempor
        
        
        
        %%For target, distractors
    elseif (DATA(itrial).dsetsize==1) || (DATA(itrial).dsetsize==4)|| (DATA(itrial).dsetsize==9)||...
            (DATA(itrial).dsetsize==19)|| (DATA(itrial).dsetsize==31)
     %%%This is going be giving the target a number of 1 and for the orange and blue    
        if (DATA(itrial).dcolors==1) || (DATA(itrial).dcolors==2)
            locd=zeros(1,36);
            loct=zeros(1,36);
            locd(1,1)=1;
            i=2;
            
            while(i)<=ssmd+1;
                loct(1,i)=2;
                i=i+1;
            end
            
            for i=1:36
                if loct(1,i)==2
                    locd(1,i)=loct(1,i);
                end
            end
            
            iloc=randperm(numel(locd(1,:)));
            for i=1:36
                loc(1,i)=locd(iloc(1,i));
            end
            
            quadone=loc(1,1:9);
            quadtwo=loc(1,10:18);
            quadthree=loc(1,19:27);
            quadfour=loc(1,28:36);
          
            if (DATA(itrial).dsetsize==1)   
                quadlimit=0;
            elseif (DATA(itrial).dsetsize==4)
                quadlimit=1;
            elseif (DATA(itrial).dsetsize==9)
                quadlimit=4;
            elseif (DATA(itrial).dsetsize==19)
                quadlimit=8;
            else 
                quadlimit=14;
                   
            end
                   
            while (sum(abs(quadone))<quadlimit) || (sum(abs(quadtwo))<quadlimit) ...
                    || (sum(abs(quadthree))<quadlimit)|| (sum(abs(quadfour))<quadlimit)
                iloc=randperm(numel(locd(1,:)));
                for i=1:36
                    loc(1,i)=locd(iloc(1,i));
                end
                
                quadone=loc(1,1:9);
                quadtwo=loc(1,10:18);
                quadthree=loc(1,19:27);
                quadfour=loc(1,28:36);
            end
            
            for i=1:36
                locations(itrial,i+1)=loc(1,i);
            end;
            

        elseif (DATA(itrial).dcolors==3)
            locd=zeros(1,36);
            loct=zeros(1,36);
            locd(1,1)=1;
            i=2;
            
            while i<=(ssmd+1) 
                locd(1,i)=3;
                i=i+1;
            end
            
            iloc=randperm(numel(locd(1,:)));
            for i=1:36
                loc(1,i)=locd(iloc(1,i));
            end
            
            quadone=loc(1,1:9);
            quadtwo=loc(1,10:18);
            quadthree=loc(1,19:27);
            quadfour=loc(1,28:36);
            
            if (DATA(itrial).dsetsize==1)
                quadlimit=0;
            elseif (DATA(itrial).dsetsize==4)
                quadlimit=2;
            elseif (DATA(itrial).dsetsize==9)
                quadlimit=5;
            elseif (DATA(itrial).dsetsize==19)
                quadlimit=11;
            else
                   quadlimit=20;
            end
            
            while (sum(abs(quadone))<quadlimit) || (sum(abs(quadtwo))<quadlimit) ...
                    || (sum(abs(quadthree))<quadlimit)|| (sum(abs(quadfour))<quadlimit)
                iloc=randperm(numel(locd(1,:)));
                for i=1:36
                    loc(1,i)=locd(iloc(1,i));
                end
                
                quadone=loc(1,1:9);
                quadtwo=loc(1,10:18);
                quadthree=loc(1,19:27);
                quadfour=loc(1,28:36);
            end

            for i=1:36
                locations(itrial,i+1)=loc(1,i);
            end;
            
        end;
        
        n=1;
        
        %populate grid
        cnt_l=0;
        cnt_r=0;
        
        for i=1:36
            if loc(i)==1
                grid_nc(i);
                tempor=fix(rand(1)*4)+1;
%                 tempx=cx+round(rand(1)*jitter)+offset;
%                 tempy=cy+(round(rand(1)*jitter))+offset;
                tempx = cx;
                tempy = cy;
                if DATA(itrial).tid==0
                    Screen('DrawTexture',window, rrt, [], [tempx tempy tempx+30 tempy+30]);
                elseif DATA(itrial).tid==1
                    Screen('DrawTexture',window, rlt, [], [tempx tempy tempx+30 tempy+30]);
                end;
            elseif loc(i)==2
                grid_nc(i);
                tempor=fix(rand(1)*4)+1;
%                 tempx= cx +round(rand(1)*jitter)+offset;
%                 tempy= cy +(round(rand(1)*jitter))+offset;
                tempx = cx;
                tempy = cy;
                if DATA(itrial).dcolors==1
                    Screen('DrawTexture',window,og,[],[tempx tempy tempx+30 tempy+30]);
                elseif DATA(itrial).dcolors==2
                    Screen('DrawTexture',window,bl,[],[tempx tempy tempx+30 tempy+30]);
                end;
            elseif loc(i)==3
                grid_nc(i);
                tempor=fix(rand(1)*4)+1;
%                 tempx= cx +round(rand(1)*jitter)+offset;
%                 tempy= cy +(round(rand(1)*jitter))+offset;
                tempx = cx;
                tempy = cy;
                randnum=rand(1);
                if randnum<=.5
                    if cnt_l<=2
                    Screen('DrawTexture',window, yll, [], [tempx tempy tempx+30 tempy+30]);
                    cnt_l=cnt_l+1;
                    else
                    Screen('DrawTexture',window, ylr, [], [tempx tempy tempx+30 tempy+30]);  
                    end
                else
                    if cnt_r<=2
                    Screen('DrawTexture',window, ylr, [], [tempx tempy tempx+30 tempy+30]);
                    cnt_r=cnt_r+1;
                    else 
                    Screen('DrawTexture',window, yll, [], [tempx tempy tempx+30 tempy+30]);
                    end;
                end;
            end;
        end;
        clear tempx
        clear tempy
        clear tempor
    end;
    
    while KbCheck; end;
    
    %%%%start search task
    
    s0=GetSecs;
    
    %             Screen('DrawLine',window,white,Xcentre-9,Ycentre,Xcentre+9,Ycentre)
    %             Screen('DrawLine',window,white,Xcentre,Ycentre-9,Xcentre,Ycentre+9)
    Screen('Flip',window);
    %Screen('WaitBlanking',window,fixtime);
    %             WaitSecs(1);
    t1=GetSecs;
    s=0;
    while ~KbCheck && (s<totaltime),
        s=GetSecs-s0;
        %                 Screen('DrawTexture',window,search,[],[]);
        %                 Screen('Flip',window);
        %c=c+1;
    end;
    [touch,secs,keyCode]=KbCheck;
    DATA(itrial).rt=(secs-t1)*1000;
    %Screen('Flip',window);
    
    % clear search
    %Screen('Close',search);
    
    %Screen('DrawLine',window,black,Xcentre-9,Ycentre,Xcentre+9,Ycentre)
    %Screen('DrawLine',window,black,Xcentre,Ycentre-9,Xcentre,Ycentre+9)
    %Screen('Flip',window);
    if keyCode(LeftKey)
        if(DATA(itrial).tid==1)
            DATA(itrial).resp=1;
            DATA(itrial).error=0;
        else
            DATA(itrial).resp=0;
            DATA(itrial).error=1;
            beep;
            %   if (strcmp(Prac,'y'))
            %      beep;
            % end;
            
        end;
        %break;
    elseif keyCode(RightKey)
        if(DATA(itrial).tid==0)
            DATA(itrial).resp=0;
            DATA(itrial).error=0;
        else
            DATA(itrial).resp=1;
            DATA(itrial).error=1;
            beep;
            %               if (strcmp(Prac,'y'))
            %                   beep;
            %             end;
        end;
        %break;
    else
        DATA(itrial).resp=3;
        DATA(itrial).error=1;
        beep;
    end;
    
    if keyCode(escKey)
        fprintf('ESC\n');
        Screen('CloseAll');
        endtrial=itrial;
        break;
    end;
    
    %Screen('Close',search);
    
    fprintf('+  %4.1f   %2d   %2d\n', DATA(itrial).rt,...
        DATA(itrial).resp,DATA(itrial).error);
    
    
    %Screen('Close',search);
    
    while KbCheck;end; % wait until key is released.
    Screen('FillRect', window,[0 0 0]);
    Screen('Flip', window);
    
    Screen('WaitBlanking',window,ITI);
    if mod(itrial,40)==0
        % if mod(itrial,2)==0 %% only for debugging hopefully :)
        waittext='Take a break!';
        starttext='Press a key to start again!';
        DrawFormattedText(window,waittext,'center','center',[255 255 255]);
        %Screen('DrawText',window,waittext,(rect(3)/2)-150,(rect(4)/2),[0,0,0],[153 153 153]);
        Screen('Flip',window);
        WaitSecs(5);
        for i=((itrial-40)+1):itrial
            fprintf(fid, '%-8s   %3d      %2d   %d      %2d       %d     %4.0f    %d     %d     %2d    %2d    %2d    %2d    %2d    %2d    %2d    %2d    %2d    %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d     %2d  \r',...
                num2str(SbjID), DATA(i).trial, DATA(i).tsetsize, ...
                DATA(i).tid, DATA(i).dsetsize, DATA(i).dcolors, DATA(i).rt, DATA(i).resp, DATA(i).error, ...
                locations(i,2), locations(i,3),locations(i,4),locations(i,5),locations(i,6),...
                locations(i,7), locations(i,8), locations(i,9),locations(i,10),locations(i,11),locations(i,12),...
                locations(i,13),locations(i,14),locations(i,15),locations(i,16),locations(i,17),locations(i,18),...
                locations(i,19),locations(i,20),locations(i,21),locations(i,22),locations(i,23),locations(i,24),...
                locations(i,25),locations(i,26),locations(i,27),locations(i,28),locations(i,29),locations(i,30),...
                locations(i,31),locations(i,32),locations(i,33),locations(i,34),locations(i,35),locations(i,36),locations(i,37));
        end;
    DrawFormattedText(window,starttext,'center','center',[255 255 255]);
    %Screen('DrawText',window,starttext,(rect(3)/2)-250,(rect(4)/2),[0,0,0], [153 153 153]);
    Screen('Flip',window);
    while ~KbCheck end
    Screen('Flip',window);
end;
end;


%Screen('Close');


%getchar;

Screen('CloseAll');

    
    %--------------------------------------------
    %	Output File
    %--------------------------------------------
    % open data file
    % 	fid=fopen(['Visual_Search' num2str(SbjID) '.out'],'a');   %OPEN AT BEGINNING
    %    	fprintf(fid, 'Subject     Trial   tss  tid   numd   dcolors   RT   resp  Error\r');
    
    %for i=1:endtrial  %put in break loop   j=itrial-60+1:itrial
    %	fprintf(fid, '%-8s   %3d   %2d    %d   %2d   %2d   %4.0f      %d     %d\r', ...
    %               num2str(SbjID), DATA(i).trial, DATA(i).tsetsize, ...
    %                DATA(i).tid, DATA(i).rt, DATA(i).resp, DATA(i).error);
   % end;
    fclose(fid);
    clear all;