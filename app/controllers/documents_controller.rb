require 'uri'

class DocumentsController < ApplicationController
  def print
    # @document = "&lt;div class=&quot;document portrait&quot;&gt; &lt;div id=&quot;ember373&quot; class=&quot;ember-view document-inner infoblad&quot;&gt;&lt;div id=&quot;ember376&quot; class=&quot;ember-view document-header&quot; style=&quot;background-color: rgb(0, 147, 214); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;ul id=&quot;ember381&quot; class=&quot;ember-view color-picker&quot; style=&quot;display:none;&quot;&gt;&lt;li id=&quot;ember384&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember385&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(244, 244, 244); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember386&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(0, 147, 214); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember387&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(252, 224, 0); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember388&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(192, 207, 2); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember389&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(99, 170, 46); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember390&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(243, 229, 240); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember391&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(116, 65, 145); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember392&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(230, 69, 145); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember393&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(204, 3, 123); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember394&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(224, 7, 19); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;&#x2F;ul&gt;&lt;&#x2F;div&gt; &lt;div class=&quot;header-symbol&quot;&gt; &lt;div id=&quot;ember398&quot; class=&quot;ember-view symbol&quot;&gt;&lt;img id=&quot;ember401&quot; class=&quot;ember-view&quot; src=&quot;&#x2F;assets&#x2F;symbols&#x2F;Kyrkofonstret_Skugga_gra.png&quot;&gt;&lt;ul id=&quot;ember402&quot; class=&quot;ember-view color-picker&quot; style=&quot;display:none;&quot;&gt;&lt;li id=&quot;ember403&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember404&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(244, 244, 244); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember405&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(0, 147, 214); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember406&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(252, 224, 0); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember407&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(192, 207, 2); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember408&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(99, 170, 46); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember409&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(243, 229, 240); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember410&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(116, 65, 145); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember411&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(230, 69, 145); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember412&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(204, 3, 123); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;li id=&quot;ember413&quot; class=&quot;ember-view color-picker__color&quot; style=&quot;background-color: rgb(224, 7, 19); background-position: initial initial; background-repeat: initial initial;&quot;&gt;&lt;&#x2F;li&gt;&lt;&#x2F;ul&gt;&lt;&#x2F;div&gt; &lt;&#x2F;div&gt; &lt;div class=&quot;header-editor&quot;&gt; &lt;div class=&quot;redactor_box&quot;&gt;&lt;textarea name=&quot;ember417&quot; style=&quot;height: 0px; display: none;&quot;&gt;&lt;&#x2F;textarea&gt;&lt;div id=&quot;ember417&quot; class=&quot;ember-view redactor_editor&quot; contenteditable=&quot;true&quot; dir=&quot;ltr&quot;&gt;&lt;h1&gt;Rubrik&lt;&#x2F;h1&gt;&lt;&#x2F;div&gt;&lt;&#x2F;div&gt; &lt;&#x2F;div&gt; &lt;div class=&quot;main-editor&quot;&gt; &lt;div class=&quot;redactor_box&quot;&gt;&lt;textarea name=&quot;ember418&quot; style=&quot;height: 0px; display: none;&quot;&gt;&lt;&#x2F;textarea&gt;&lt;div id=&quot;ember418&quot; class=&quot;ember-view redactor_editor&quot; contenteditable=&quot;true&quot; dir=&quot;ltr&quot;&gt;My Main&lt;&#x2F;div&gt;&lt;&#x2F;div&gt; &lt;&#x2F;div&gt; &lt;div class=&quot;footer-content&quot;&gt; &lt;div class=&quot;redactor_box&quot;&gt;&lt;textarea name=&quot;ember419&quot; style=&quot;height: 0px; display: none;&quot;&gt;&lt;&#x2F;textarea&gt;&lt;div id=&quot;ember419&quot; class=&quot;ember-view redactor_editor&quot; contenteditable=&quot;true&quot; dir=&quot;ltr&quot;&gt;My Footer&lt;&#x2F;div&gt;&lt;&#x2F;div&gt; &lt;&#x2F;div&gt; &lt;&#x2F;div&gt; &lt;&#x2F;div&gt;"

    # @document = CGI::unescapeHTML(@document)
    @document = params[:document]
    
    title = 'title'

    @download = "inline"

    if params[:download] == "true"
      @download = "attachment"
    elsif params[:download] == "false"
      @download = "inline"
    end

    if ENV["RAILS_ENV"] == "development"
      @baseurl = "#{request.protocol}83.253.140.111:#{request.port.to_s}"
    else
      @baseurl = "#{request.protocol}#{request.host_with_port}"
    end

    respond_to do |format|
      format.pdf do
        data = DocRaptor.create(
          :name => "#{title}.pdf",
          :document_content => render_to_string,
          :document_type => "pdf",
          :test => true,
          :prince_options => {:baseurl => @baseurl}
        )
        send_data(
          data,
          :type => 'application/pdf',
          :filename => "#{title}.pdf",
          :disposition => @download
        )
      end
    end
  end

  # GET /documents
  # GET /documents.json
  def index
    if (params[:public])
      @documents = Document.where('public = ?', params[:public])
    else
      @documents = Document.all
    end

    respond_to do |format|
      format.html # index.html.erb
      format.json { render jbuilder: @documents }
    end
  end

  # GET /documents/1
  # GET /documents/1.json
  def show
    @document = Document.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render jbuilder: @document }
    end
  end

  # GET /documents/new
  # GET /documents/new.json
  def new
    @document = Document.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @document }
    end
  end

  # GET /documents/1/edit
  def edit
    @document = Document.find(params[:id])
  end

  # POST /documents
  # POST /documents.json
  def create
    @document = Document.new(params[:document])

    respond_to do |format|
      if @document.save
        format.html { redirect_to @document, notice: 'Document was successfully created.' }
        format.json { render jbuilder: @document, status: :created, location: @document }
      else
        format.html { render action: "new" }
        format.json { render json: @document.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /documents/1
  # PUT /documents/1.json
  def update
    @document = Document.find(params[:id])

    respond_to do |format|
      if @document.update_attributes(params[:document])
        format.html { redirect_to @document, notice: 'Document was successfully updated.' }
        # format.json { head :no_content }
        format.json { render jbuilder: @document }
      else
        format.html { render action: "edit" }
        format.json { render json: @document.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /documents/1
  # DELETE /documents/1.json
  def destroy
    @document = Document.find(params[:id])
    @document.destroy

    respond_to do |format|
      format.html { redirect_to documents_url }
      # format.json { head :no_content }
      format.json { render json: @document }
    end
  end
end
